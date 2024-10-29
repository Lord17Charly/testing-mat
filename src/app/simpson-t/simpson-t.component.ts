import { Component } from "@angular/core";
import { SimpsonRule } from "../common/simpson_rule";

@Component({
  selector: "app-simpson",
  templateUrl: "./simpson-t.component.html",
  styleUrls: ["./simpson-t.component.css"],
})
export class SimpsonComponent {
  resultadoA: number = 0;
  resultadoB: number = 0;
  resultadoC: number = 0;

  constructor() {
    this.calcularResultados();
  }

  calcularResultados(): void {
    this.resultadoA = SimpsonRule.simpson(0, 4, 4, 0.0001, SimpsonRule.fx_2x);
    this.resultadoB = SimpsonRule.simpson(0, 1, 4, 0.0001, SimpsonRule.fx_x2);
    this.resultadoC = SimpsonRule.simpson(1, 4, 6, 0.001, SimpsonRule.fx_1_x);
  }
}
