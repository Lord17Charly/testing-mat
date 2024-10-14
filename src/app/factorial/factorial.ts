export function factorial(x: number): number {
  if (x < 0) return 0;
  if (x === 0) return 1;
  if (x > 15) return 0;
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
}
