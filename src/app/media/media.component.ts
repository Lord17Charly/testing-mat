import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent {
  public mean: number | null = null;

  constructor(private http: HttpClient) {
    this.calculateMeanFromFile('assets/colum1.json');
  }

  readDataFromFile(fileName: string): void {
    this.http.get<any>(fileName).subscribe(
      (data) => {
        this.calculateMeanFromData(data.column1);
      },
      (error) => {
        console.error('Error al leer el archivo:', error);
      }
    );
  }

  calculateMean(numbers: number[]): number {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    return total / numbers.length;
  }

  calculateMeanFromFile(fileName: string): void {
    this.readDataFromFile(fileName);
  }

  calculateMeanFromData(numbers: number[]): void {
    this.mean = this.calculateMean(numbers);
  }
}
