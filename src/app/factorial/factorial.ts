export function factorial(x: number): number {
  if (x < 0) return 0; // Factorial no está definido para números negativos
  if (x === 0) return 1; // El factorial de 0 es 1

  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= i; // Multiplica cada número desde 1 hasta x
  }
  return result;
}
