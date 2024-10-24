import { Component } from "@angular/core";

@Component({
  selector: "app-simpson",
  standalone: true,
  templateUrl: "./simpson.component.html",
  styleUrls: ["./simpson.component.css"],
})
export class SimpsonComponent {
  calcularSimpson(x0: number, x1: number, n: number): number {
    let W = (x1 - x0) / n;
    let suma = 0;
    let f0 = 2 * x0;
    suma = suma + f0;
    for (let i = 1; i < n; i += 2) {
      let x = x0 + i * W;
      let fx = 2 * x;
      suma = suma + 4 * fx;
    }

    for (let i = 2; i < n; i += 2) {
      let x = x0 + i * W;
      let fx = 2 * x;
      suma = suma + 2 * fx;
    }
    let f1 = 2 * x1;
    suma = suma + f1;
    let P = (W / 3) * suma;
    return P;
  }
}
