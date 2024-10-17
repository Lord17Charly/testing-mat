import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stddev',
  standalone: true,
  imports: [],
  templateUrl: './stddev.component.html',
  styleUrls: ['./stddev.component.css'],
})
export class StddevComponent {
  public stdDevTable1: number | null = null;
  public stdDevTable2: number | null = null;

  constructor(private http: HttpClient) {
    this.calculateStdDevFromFile('assets/table.json');
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

  // Función para calcular la desviación estándar
  calculateStdDev(numbers: number[]): number {
    const mean = this.calculateMean(numbers);
    const squaredDiffs = numbers.map((num) => Math.pow(num - mean, 2));
    const meanSquaredDiff = this.calculateMean(squaredDiffs);
    return Math.sqrt(meanSquaredDiff);
  }

  // Función que lee los datos y calcula la desviación estándar para ambas tablas
  calculateStdDevFromFile(fileName: string): void {
    this.readDataFromFile(fileName).subscribe((data) => {
      const table1 = data.table1;
      const table2 = data.table2;

      this.stdDevTable1 = this.calculateStdDev(table1);
      this.stdDevTable2 = this.calculateStdDev(table2);
    });
  }
}
