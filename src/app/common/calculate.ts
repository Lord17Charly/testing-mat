export function sumX(xData: number[]): number {
  return xData.reduce((acc, curr) => acc + curr, 0);
}

export function sumY(yData: number[]): number {
  return yData.reduce((acc, val) => acc + val, 0);
}

export function sumXX(xData: number[]): number {
  return xData.reduce((acc, val) => acc + val ** 2, 0);
}

export function sumXY(xData: number[], yData: number[]): number {
  return xData.reduce((acc, val, index) => acc + val * yData[index], 0);
}

export function sumYY(yData: number[]): number {
  return yData.reduce((acc, val) => acc + val ** 2, 0);
}
