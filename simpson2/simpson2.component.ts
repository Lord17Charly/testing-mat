import { Component } from "@angular/core";

@Component({
  selector: "app-simpson2",
  standalone: true,
  imports: [],
  templateUrl: "./simpson2.component.html",
  styleUrl: "./simpson2.component.css",
})
export class Simpson2Component {
  private readonly ERROR = 0.0001;

  calcularSimpson(
    x0: number,
    x1: number,
    n: number
  ): { resultado: number; funcion: string; error: number } {
    let W = (x1 - x0) / n;
    let suma = 0;
    let f0 = x0 * x0;
    suma = suma + f0;

    for (let i = 1; i < n; i += 2) {
      let x = x0 + i * W;
      let fx = x * x;
      suma = suma + 4 * fx;
    }
    for (let i = 2; i < n; i += 2) {
      let x = x0 + i * W;
      let fx = x * x;
      suma = suma + 2 * fx;
    }
    let f1 = x1 * x1;
    suma = suma + f1;
    let P = (W / 3) * suma;
    return {
      resultado: P,
      funcion: "f(x) = x^2",
      error: this.ERROR,
    };
  }
}
