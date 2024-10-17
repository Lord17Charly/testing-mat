import { Component } from "@angular/core";
import { MediaComponent } from "../media/media.component";

@Component({
  selector: "app-stddev",
  standalone: true,
  imports: [],
  templateUrl: "./stddev.component.html",
  styleUrls: ["./stddev.component.css"],
})
export class StddevComponent {
  constructor(private mediaComponent: MediaComponent) {}

  obtenerDesviacionEstandar(numeros: number[]): number {
    const media = this.mediaComponent.obtenerMedia(numeros);
    const sumaDiferenciasCuadradas = numeros.reduce((sum, num) => {
      const diferencia = num - media;
      return sum + Math.pow(diferencia, 2);
    }, 0);
    const varianza = sumaDiferenciasCuadradas / (numeros.length - 1);
    return Math.sqrt(varianza);
  }
}
