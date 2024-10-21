export function xx(x: number[]) {
  const cuadrado = x.map((n) => n * n);
  const suma = cuadrado.reduce((a, b) => a + b, 0);
  //retorna array al cuadrado de x
  return suma;
}

export function procesarArrays(x: number[], y: number[]): number {
  // En este caso, vamos a multiplicar los elementos del array1 por los del array2
  //y da como resultado xy
  const multiplicar = x.map((n, index) => n * y[index]);
  const suma = multiplicar.reduce((a, b) => a + b, 0);
  return suma;
}

export function mediax(x: number[]): number {
  // media de x
  const suma = x.reduce((a, b) => a + b, 0);
  return suma / x.length;
}
export function mediay(y: number[]): number {
  // media de y
  const suma = y.reduce((a, b) => a + b, 0);
  return suma / y.length;
}

export function sumarCuadrados(x: number[]): number {
  // Llama a la función `xx` para obtener los cuadrados
  const suma = x.reduce((a, b) => a + b, 0); // Suma los cuadrados
  return suma;
}

export function sumatoriaxy(x: number[]): number {
  // Llama a la función `xx` para obtener los cuadrados
  const suma = x.reduce((a, b) => a + b, 0); // Suma los cuadrados
  return suma;
}

export function Pendiente(x: number[], y: number[]): number {
  const sumatoria_xy = procesarArrays(x, y);
  const media_x = mediax(x);
  const media_y = mediay(y);
  const sumatoria_x_cuadrado = xx(x);
  const n = x.length;
  const primeraparte = sumatoria_xy - n * media_x * media_y;

  return primeraparte;
}
export function Pendiente2(x: number[], y: number[]): number {
  const suma_de_x_cuadrada = xx(x);
  const media_x = mediax(x);
  const n = x.length;
  const segundaParte = suma_de_x_cuadrada - n * (media_x * media_x);

  return segundaParte;
}

export function Pendienteverdadera(x: number[], y: number[]): number {
  const parte_superior = Pendiente(x, y);
  const parte_inferior = Pendiente2(x, y);
  const pendientev = parte_superior / parte_inferior;

  return pendientev;
}
export function ordenada(x: number[], y: number[]): number {
  const pendiente = Pendienteverdadera(x, y);
  const media_y = mediay(y);
  const media_x = mediax(x);
  const ordenada = media_y - pendiente * media_x;

  return ordenada;
}
export function ecuacionrecta(x: number[], y: number[]): number {
  const ordenad = ordenada(x, y);
  const pendiente = Pendienteverdadera(x, y);
  const recta = ordenad + pendiente;

  return recta;
}

export function ecuacionrectaif(x: number[], y: number[]): number {
  const ordenad = ordenada(x, y);
  const pendiente = Pendienteverdadera(x, y);
  const x1 = 386;
  const recta = ordenad + pendiente * x1;

  return recta;
}
