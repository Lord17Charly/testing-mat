export function sumaX(valoresX: number[]): number {
  return valoresX.reduce((acc, x) => acc + x, 0);
}

export function sumaY(valoresY: number[]): number {
  return valoresY.reduce((acc, y) => acc + y, 0);
}

export function sumaXY(valoresX: number[], valoresY: number[]): number {
  return valoresX.reduce((acc, x, index) => acc + x * valoresY[index], 0);
}

export function sumaX2(valoresX: number[]): number {
  return valoresX.reduce((acc, x) => acc + x * x, 0);
}

export function sumaY2(valoresY: number[]): number {
  return valoresY.reduce((acc, y) => acc + y * y, 0);
}

export function media(datos: number[]): number {
  console.log(datos);

  if (datos.length === 0) {
    throw new Error("vacio");
  }

  const suma = datos.reduce((total, valor) => total + valor, 0);
  const media = suma / datos.length;

  return Math.round(media * 100) / 100;
}
