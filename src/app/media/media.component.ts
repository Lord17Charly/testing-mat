import { Component } from "@angular/core";

@Component({
  selector: "app-media",
  standalone: true,
  imports: [],
  templateUrl: "./media.component.html",
  styleUrl: "./media.component.css",
})
export class MediaComponent {
  obtenerMedia(numeros: number[]): number {
    const suma = numeros.reduce((a, b) => a + b, 0);
    return suma / numeros.length;
  }
}
