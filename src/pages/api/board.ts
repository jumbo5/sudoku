import { generator } from '@forfuns/sudoku'
import type { NextApiRequest, NextApiResponse } from 'next'

import { separateBoard } from '@app/utils/array'
import { GenerateBoardResponse } from '@app/views/IndexPage/control/types'

export default (
  _req: NextApiRequest,
  res: NextApiResponse<GenerateBoardResponse>,
) => {
  const originalPuzzle: number[] = generator(
    Number(_req.query.difficulty) || 0,
  ).map((i) => (i === -1 ? 0 : i))

  res.status(200).json({ board: separateBoard(originalPuzzle) })
}
