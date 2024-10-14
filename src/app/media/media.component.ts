import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent {
  public meanTable1: number | null = null;
  public meanTable2: number | null = null;

  constructor(private http: HttpClient) {
    // Llamar a la función para calcular la media cuando se crea el componente
    this.calculateMeanFromFile('assets/table.json');
  }

  // Leer datos del archivo JSON
  readDataFromFile(fileName: string): Observable<any> {
    return this.http.get(fileName);
  }

  // Función para calcular la media de una lista de números
  calculateMean(numbers: number[]): number {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
  }

  // Función que lee los datos y calcula la media para ambas tablas
  calculateMeanFromFile(fileName: string): void {
    this.readDataFromFile(fileName).subscribe((data) => {
      const table1 = data.table1;
      const table2 = data.table2;

      this.meanTable1 = this.calculateMean(table1);
      this.meanTable2 = this.calculateMean(table2);
    });
  }
}
