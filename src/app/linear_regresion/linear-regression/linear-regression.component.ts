import { Component } from "@angular/core";

@Component({
  selector: "app-linear-regression",
  standalone: true,
  imports: [],
  templateUrl: "./linear-regression.component.html",
  styleUrl: "./linear-regression.component.css",
})
export class LinearRegressionComponent {
  // Función para calcular la suma de los cuadrados de x
  xx(x: number[]): number {
    const cuadrado = x.map((n) => n * n);
    const suma = cuadrado.reduce((a, b) => a + b, 0);
    return suma;
  }

  // Función para procesar los arrays y multiplicar los elementos correspondientes
  procesarArrays(x: number[], y: number[]): number {
    const multiplicar = x.map((n, index) => n * y[index]);
    const suma = multiplicar.reduce((a, b) => a + b, 0);
    return suma;
  }

  // Función para calcular la media de x
  mediax(x: number[]): number {
    const suma = x.reduce((a, b) => a + b, 0);
    return suma / x.length;
  }

  // Función para calcular la media de y
  mediay(y: number[]): number {
    const suma = y.reduce((a, b) => a + b, 0);
    return suma / y.length;
  }

  // Función para sumar cuadrados (usando `xx`)
  sumarCuadrados(x: number[]): number {
    const suma = x.reduce((a, b) => a + b, 0);
    return suma;
  }

  // Calcula la sumatoria de los productos de x e y
  sumatoriaxy(x: number[], y: number[]): number {
    const suma = x.reduce((a, b) => a + b, 0);
    return suma;
  }

  // Función para calcular la parte superior de la fórmula de la pendiente
  Pendiente(x: number[], y: number[]): number {
    const sumatoria_xy = this.procesarArrays(x, y);
    const media_x = this.mediax(x);
    const media_y = this.mediay(y);
    const sumatoria_x_cuadrado = this.xx(x);
    const n = x.length;
    const primeraparte = sumatoria_xy - n * media_x * media_y;
    return primeraparte;
  }

  // Función para calcular la parte inferior de la fórmula de la pendiente
  Pendiente2(x: number[], y: number[]): number {
    const suma_de_x_cuadrada = this.xx(x);
    const media_x = this.mediax(x);
    const n = x.length;
    const segundaParte = suma_de_x_cuadrada - n * (media_x * media_x);
    return segundaParte;
  }

  // Función para calcular la pendiente verdadera (pendiente = parte superior / parte inferior)
  Pendienteverdadera(x: number[], y: number[]): number {
    const parte_superior = this.Pendiente(x, y);
    const parte_inferior = this.Pendiente2(x, y);
    const pendientev = parte_superior / parte_inferior;
    return pendientev;
  }

  // Función para calcular la ordenada (intersección con el eje y)
  ordenada(x: number[], y: number[]): number {
    const pendiente = this.Pendienteverdadera(x, y);
    const media_y = this.mediay(y);
    const media_x = this.mediax(x);
    const ordenada = media_y - pendiente * media_x;
    return ordenada;
  }

  // Función para calcular la ecuación de la recta (intersección + pendiente)
  ecuacionrecta(x: number[], y: number[]): number {
    const ordenad = this.ordenada(x, y);
    const pendiente = this.Pendienteverdadera(x, y);
    const recta = ordenad + pendiente;
    return recta;
  }

  // Función para calcular la ecuación de la recta para un valor específico de x (por ejemplo, x = 386)
  ecuacionrectaif(x: number[], y: number[]): number {
    const ordenad = this.ordenada(x, y);
    const pendiente = this.Pendienteverdadera(x, y);
    const x1 = 386; // Valor específico de x
    const recta = ordenad + pendiente * x1;
    return recta;
  }
}
