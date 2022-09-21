export const countScore = (time: number, droppedUnit: number): number => {
  const score = (1 / time - 2.5) * droppedUnit * 1000
  return score
}
