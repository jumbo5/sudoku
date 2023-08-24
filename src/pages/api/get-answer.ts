import { generator, Sudoku } from '@forfuns/sudoku'
import type { NextApiRequest, NextApiResponse } from 'next'

import { separateBoard } from '@app/utils/array'
import { board } from '@app/views/IndexPage/control/types'

export default (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { board } = _req.body as { board: board }

    const sudoku = new Sudoku(board.flat().map((i) => (i === 0 ? -1 : i)))

    res.status(200).json({ answer: separateBoard(sudoku.getAnswer()) })
  } catch {
    res.status(400)
  }
}
