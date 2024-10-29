export class SimpsonRule {
  static simpson(
    x0: number,
    x1: number,
    numSeg: number,
    error: number,
    func: (x: number) => number
  ): number {
    const h = (x1 - x0) / numSeg;
    let sum = func(x0) + func(x1);

    for (let i = 1; i < numSeg; i++) {
      const x = x0 + i * h;
      sum += (i % 2 === 0 ? 2 : 4) * func(x);
    }

    return (h / 3) * sum;
  }

  static fx_2x(x: number): number {
    return 2 * x;
  }

  static fx_x2(x: number): number {
    return Math.pow(x, 2);
  }

  static fx_1_x(x: number): number {
    return 1 / x;
  }
}
