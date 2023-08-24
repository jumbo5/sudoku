import axios from 'axios'
import { observable } from 'mobx'
import {
  _async,
  _await,
  Model,
  model,
  modelAction,
  modelFlow,
  prop,
} from 'mobx-keystone'

import { GetAnswerResponse } from '@app/views/IndexPage/control/types'

import { Cell } from './cellModel'
import { difficultiesType, GenerateBoardResponse } from '../types'
import { isBoardValid } from '../utils'

@model('sudoku')
export class SudokuState extends Model({
  board: prop<Cell[][]>(),
}) {
  @observable isSolved = false
  @observable selectedNumber = 0
  @observable generatingBoard = false
  @observable getAnswerPending = false
  @observable timer = 0

  convertBoardToNumberArray(board: Cell[][]) {
    return board.map((row) =>
      row.map((cell) => (cell.notes?.length < 2 ? cell.number : 0)),
    )
  }

  convertNumberArrayToBoard(array: number[][]) {
    return array.map((row) =>
      row.map(
        (cell) =>
          new Cell({
            number: cell,
            disabled: cell !== 0,
          }),
      ),
    )
  }

  @modelAction
  setTimer(number: number) {
    this.timer = number
  }

  @modelAction
  selectNumber(number: number) {
    if (number !== 0) {
      this.board.forEach((row) =>
        row.forEach((cell) => {
          if (cell.number === number && cell.notes.length < 2) {
            cell.highlighted = true
          }

          if (cell.number !== number && cell.highlighted) {
            cell.highlighted = false
          }
        }),
      )
    } else {
      this.board.forEach((row) =>
        row.forEach((cell) => {
          if (cell.highlighted) {
            cell.highlighted = false
          }
        }),
      )
    }

    this.selectedNumber = number
  }

  @modelAction
  initializeBoard(board: number[][]) {
    this.board = this.convertNumberArrayToBoard(board)
  }

  @modelAction
  validateBoard() {
    const isSolved = isBoardValid(this.convertBoardToNumberArray(this.board))
    this.isSolved = isSolved

    return isSolved
  }

  @modelAction
  clearBoard() {
    this.board.forEach((row, i1) =>
      row.forEach((cell, i2) => {
        if (!cell.disabled && cell.number !== 0) {
          cell.onClear()
        }
      }),
    )
  }

  @modelFlow
  public getAnswer = _async(function* (this: SudokuState) {
    this.getAnswerPending = true

    const board = yield* _await(
      axios.post<GetAnswerResponse>(`api/get-answer`, {
        board: this.convertBoardToNumberArray(this.board),
      }),
    )

    this.board.forEach((row, i1) =>
      row.forEach((cell, i2) => {
        if (cell.number === 0) {
          cell.onUpdateNumber(
            String(board.data.answer[i1][i2]),
            this.selectedNumber,
          )
        }
      }),
    )

    this.getAnswerPending = false
    this.isSolved = true
  })

  @modelFlow
  public generateBoard = _async(function* (
    this: SudokuState,
    difficulty: number,
  ) {
    this.generatingBoard = true

    const board = yield* _await(
      axios.get<GenerateBoardResponse>(`api/board?difficulty=${difficulty}`),
    )

    this.board = this.convertNumberArrayToBoard(board.data.board)
    this.timer = 0
    this.generatingBoard = false
    this.isSolved = false
  })
}

export const sudokuState = new SudokuState({
  board: new Array(9).fill(new Array(9).fill(0)),
})
