import { Component } from "@angular/core";
import { gamma } from "../common/simpson_rule";

@Component({
  selector: "app-simpson-t",
  standalone: true,
  imports: [],
  templateUrl: "./simpson-t.component.html",
  styleUrls: ["./simpson-t.component.css"],
})
export class SimpsonTComponent {
  calc2x = this.simpson((x: number) => 2 * x, 0, 4, 4, 0.0001);
  calcx2 = this.simpson((x: number) => x * x, 0, 1, 4, 0.0001);
  calc1_x = this.simpson((x: number) => 1 / x, 1, 4, 6, 0.001);
  calct9 = this.simpson(
    (t: number) => this.tDistribution(t, 9),
    0,
    1.1,
    10,
    0.00001
  );
  calct10 = this.simpson(
    (t: number) => this.tDistribution(t, 10),
    0,
    1.1812,
    10,
    0.00001
  );
  calct30 = this.simpson(
    (t: number) => this.tDistribution(t, 30),
    0,
    2.75,
    10,
    0.00001
  );

  simpson(
    funcion: (x: number) => number,
    a: number,
    b: number,
    numSegmentos: number,
    error: number
  ): number {
    let simpsonPrev: number = 0;
    let simpsonActual: number = 0;
    let n = numSegmentos;
    let w: number = (b - a) / n;

    simpsonPrev = Number.MAX_VALUE;

    do {
      simpsonPrev = simpsonActual;
      simpsonActual = 0;

      simpsonActual += funcion(a) + funcion(b);

      for (let i = 1; i < n; i += 2) {
        simpsonActual += 4 * funcion(a + i * w);
      }

      for (let i = 2; i < n; i += 2) {
        simpsonActual += 2 * funcion(a + i * w);
      }

      simpsonActual *= w / 3;

      n *= 2;
      w = (b - a) / n;
    } while (Math.abs(simpsonActual - simpsonPrev) > error);

    return simpsonActual;
  }

  tDistribution(t: number, dof: number): number {
    const numerator = gamma((dof + 1) / 2);
    const denominator = Math.sqrt(dof * Math.PI) * gamma(dof / 2);
    return (
      (numerator / denominator) *
      (1 / Math.pow(1 + Math.pow(t, 2) / dof, (dof + 1) / 2))
    );
  }
}
