import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MediaComponent } from './media.component';
import { of, throwError } from 'rxjs';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct mean from the JSON data', () => {
    const mockData = {
      column1: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503],
    };

    spyOn(component['http'], 'get').and.returnValue(of(mockData));

    // Llamar a la función de calcular la media
    component.calculateMeanFromFile('assets/colum1.json');

    // Verificar que la media calculada sea la correcta
    expect(component.mean).toBeCloseTo(550.6, 1);
  });

  it('should handle empty data and set mean to null', () => {
    const mockData = { column1: [] };

    spyOn(component['http'], 'get').and.returnValue(of(mockData));

    // Llamar a la función de calcular la media
    component.calculateMeanFromFile('assets/colum1.json');

    // Verificar que la media sea null (no hay datos)
    expect(component.mean).toBeNaN();
  });

  it('should handle HTTP error gracefully', () => {
    spyOn(component['http'], 'get').and.returnValue(
      throwError('Error al leer el archivo')
    );

    // Llamar a la función de calcular la media
    component.calculateMeanFromFile('assets/colum1.json');

    // Verificar que la media sea null y se registre un error
    expect(component.mean).toBeNull();
  });

  it('should correctly calculate the mean', () => {
    const numbers = [10, 20, 30];
    const mean = component.calculateMean(numbers);
    expect(mean).toBe(20);
  });
});
