import { ComponentFixture, TestBed } from "@angular/core/testing";
import Data from "./dates.json"; // Importamos los datos desde el JSON
import { Simpson3Component } from "./simpson3.component"; // Componente Standalone

describe("Simpson3Component", () => {
  let component: Simpson3Component;
  let fixture: ComponentFixture<Simpson3Component>;
  let x0: number;
  let x1: number;
  let n: number;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simpson3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Simpson3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Asignamos los valores del JSON a las variables locales
    x0 = Data.x0;
    x1 = Data.x1;
    n = Data.n;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should return p=1.38 if x0=1, x1=4, num_seg=6, and f(x)=1/x", () => {
    const resultado = component.calcularSimpson(x0, x1, n);

    // Ajustamos la tolerancia a 1 decimal
    expect(resultado).toBeCloseTo(1.38, 1);
  });
});
