export const separateBoard = (arr: number[]): number[][] => {
  const puzzle: number[][] = []

  while (arr.length > 0) {
    puzzle.push(arr.splice(0, 9))
  }

  return puzzle
}
