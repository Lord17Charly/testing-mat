import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StddevComponent], // Aquí se usa imports en lugar de declarations
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    // Simular la solicitud HTTP para evitar el error
    const req = httpMock.expectOne('assets/table.json');
    req.flush({ table1: [], table2: [] }); // Devolver datos simulados para la prueba

    expect(component).toBeTruthy();
  });

  it('should calculate the correct standard deviation for both tables from JSON file', () => {
    const mockData = {
      table1: [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503],
      table2: [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2],
    };

    const req = httpMock.expectOne('assets/table.json');
    req.flush(mockData);

    const meanTable1 =
      (160 + 591 + 114 + 229 + 230 + 270 + 128 + 1657 + 624 + 1503) / 10;
    const meanTable2 =
      (15.0 + 69.9 + 6.5 + 22.4 + 28.4 + 65.9 + 19.4 + 198.7 + 38.8 + 138.2) /
      10;

    const stdDevTable1 = Math.sqrt(
      [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]
        .map((num) => Math.pow(num - meanTable1, 2))
        .reduce((acc, curr) => acc + curr, 0) / 10
    );
    const stdDevTable2 = Math.sqrt(
      [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]
        .map((num) => Math.pow(num - meanTable2, 2))
        .reduce((acc, curr) => acc + curr, 0) / 10
    );

    expect(component.stdDevTable1).toBeCloseTo(stdDevTable1, 1);
    expect(component.stdDevTable2).toBeCloseTo(stdDevTable2, 1);
  });

  it('should handle empty data from the JSON file', () => {
    const mockData = { table1: [], table2: [] };

    const req = httpMock.expectOne('assets/table.json');
    req.flush(mockData);

    expect(component.stdDevTable1).toBeNaN();
    expect(component.stdDevTable2).toBeNaN();
  });
});
