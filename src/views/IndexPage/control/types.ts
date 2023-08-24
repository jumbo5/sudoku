import { literalArray, ValuesOf } from '@app/utils/typeUtils'

import { Cell } from './models/cellModel'
import { SudokuState } from './models/sudokuModel'

export type board = number[][]

export interface GetAnswerResponse {
  answer: board
}

export interface GenerateBoardResponse {
  board: board
}

export interface ICell extends Cell {}
export interface ISudokuState extends SudokuState {}

export const colorKeys = literalArray([
  'disabled',
  'hover',
  'focus',
  'highlighted',
])
export const colorFields = literalArray(['text', 'background'])
export const difficulties = literalArray(['easy', 'medium', 'hard', 'expert'])

export type colorKeysType = ValuesOf<typeof colorKeys>
export type colorFieldsType = ValuesOf<typeof colorFields>
export type difficultiesType = ValuesOf<typeof difficulties>

export type singleColor = { [key in colorFieldsType]: string }
export type colorsType = { [key in colorKeysType]: singleColor }

export interface ISettings {
  cellSide: number
  colors: colorsType
  showTimer: boolean
  showLeftNumber: boolean
  difficulty: number
}
