import { Component } from "@angular/core";

@Component({
  selector: "app-linear-regression",
  standalone: true,
  imports: [],
  templateUrl: "./linear-regression.component.html",
  styleUrls: ["./linear-regression.component.css"],
})
export class LinearRegressionComponent {
  // Función para calcular la suma de los cuadrados de los elementos de x
  xx(x: number[]): number {
    return x.reduce((sum, n) => sum + n * n, 0);
  }

  // Función para calcular la sumatoria del producto de x e y
  procesarArrays(x: number[], y: number[]): number {
    return x.reduce((sum, n, index) => sum + n * y[index], 0);
  }

  // Función para calcular la media de un array
  obtenerMedia(numeros: number[]): number {
    return numeros.reduce((sum, num) => sum + num, 0) / numeros.length;
  }

  // Parte superior de la fórmula de la pendiente
  Pendiente(x: number[], y: number[]): number {
    const sumatoriaXY = this.procesarArrays(x, y);
    const mediaX = this.obtenerMedia(x);
    const mediaY = this.obtenerMedia(y);
    const n = x.length;
    return sumatoriaXY - n * mediaX * mediaY;
  }

  // Parte inferior de la fórmula de la pendiente
  Pendiente2(x: number[]): number {
    const sumatoriaXCuadrado = this.xx(x);
    const mediaX = this.obtenerMedia(x);
    const n = x.length;
    return sumatoriaXCuadrado - n * mediaX * mediaX;
  }

  // Cálculo de la pendiente (B1)
  Pendienteverdadera(x: number[], y: number[]): number {
    const parteSuperior = this.Pendiente(x, y);
    const parteInferior = this.Pendiente2(x);
    return parteSuperior / parteInferior;
  }

  // Cálculo de la ordenada al origen (B0)
  ordenada(x: number[], y: number[]): number {
    const pendiente = this.Pendienteverdadera(x, y);
    const mediaY = this.obtenerMedia(y);
    const mediaX = this.obtenerMedia(x);
    return mediaY - pendiente * mediaX;
  }

  // Ecuación de la recta para un valor específico de x (386)
  ecuacionrectaif(x: number[], y: number[]): number {
    const pendiente = this.Pendienteverdadera(x, y);
    const ordenada = this.ordenada(x, y);
    const x1 = 386;
    return ordenada + pendiente * x1;
  }
}
