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
  return valoresX.reduce((acc, x) => acc + Math.pow(x, 2), 0);
}

export function sumaY2(dataY: number[]): number {
  return dataY.reduce((acc, y) => acc + Math.pow(y, 2), 0);
}

export function media(datos: number[]) {
  console.log(datos);
  if (datos.length === 0) {
    throw new Error("Error");
  }

  const suma = datos.reduce((total, valor) => total + valor, 0);
  const media = suma / datos.length;

  return Number(media.toFixed(2));
}
