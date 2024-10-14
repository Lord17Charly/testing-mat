import { factorial } from './factorial';

describe('Factorial test suite', () => {
  it('deberia retornar 0 si el resultado es menor a 0', () => {
    const result = factorial(-1);
    expect(result).toBe(0);
  });

  it('deberia retornar 1 si el factorial dado es 0', () => {
    const result = factorial(0);
    expect(result).toBe(1);
  });

  it('deberia retornar 2 si el factorial es 2', () => {
    const result = factorial(2);
    expect(result).toBe(2);
  });

  it('deberia retornar 6 si x es 3', () => {
    const result = factorial(3);
    expect(result).toBe(6);
  });

  it('deberia retornar 24 si x es 4', () => {
    const result = factorial(4);
    expect(result).toBe(24);
  });

  it('debria retornar 120 si x es 5', () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });

  it('debria retornar 0 si x > 15', () => {
    const result = factorial(5);
    expect(result).toBe(120);
  });

  it('debria retornar 0 si x es mayor a 15', () => {
    const result = factorial(16);
    expect(result).toBe(0);
  });
});
