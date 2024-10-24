import { Component } from "@angular/core";

@Component({
  selector: "app-simpson3",
  standalone: true,
  templateUrl: "./simpson3.component.html",
  styleUrls: ["./simpson3.component.css"],
})
export class Simpson3Component {
  calcularSimpson(x0: number, x1: number, n: number): number {
    let W = (x1 - x0) / n; // Ancho del segmento
    let suma = 0; // Acumulador de la suma total

    // Primer extremo f(x0)
    let f0 = 1 / x0; // f(x0) = 1 / x0
    suma += f0;

    // Iterar por los términos impares (i = 1, 3, 5, ...)
    for (let i = 1; i < n; i += 2) {
      let x = x0 + i * W;
      let fx = 1 / x; // f(x) = 1 / x
      suma += 4 * fx; // Los términos impares se multiplican por 4
    }

    // Iterar por los términos pares (i = 2, 4, 6, ...)
    for (let i = 2; i < n; i += 2) {
      let x = x0 + i * W;
      let fx = 1 / x; // f(x) = 1 / x
      suma += 2 * fx; // Los términos pares se multiplican por 2
    }

    // Último extremo f(x1)
    let f1 = 1 / x1; // f(x1) = 1 / x1
    suma += f1;

    // Aplicación de la fórmula de Simpson
    let P = (W / 3) * suma;

    // Retornar el valor de P
    return P;
  }
}
