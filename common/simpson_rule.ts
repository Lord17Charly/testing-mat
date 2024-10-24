const pi = 3.141592653589793;

function sqrtAprox(value: number, iterations: number = 10): number {
  let x = value;
  for (let i = 0; i < iterations; i++) {
    x = (x + value / x) / 2;
  }
  return x;
}

export function factorial(n: number): number {
  let result = 1;
  if (n === 0 || n === 1) return 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

export function gamma(x: number): number {
  let result: number;

  if (Number.isInteger(x) && x > 0) {
    result = factorial(x - 1);
  } else if (x > 0.5) {
    let product = sqrtAprox(pi);
    let tempX = x;

    while (tempX > 0.5) {
      product *= tempX - 1;
      tempX -= 1;
    }
    result = product;
  } else {
    result = NaN;
  }

  return result;
}
