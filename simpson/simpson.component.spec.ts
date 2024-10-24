// simpson.component.spec.ts

import { ComponentFixture, TestBed } from "@angular/core/testing";
import Data from "./dates.json"; // Importamos los datos desde el JSON
import { SimpsonComponent } from "./simpson.component"; // Componente Standalone

describe("SimpsonComponent", () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;
  let x0 = Data.x0;
  let x1 = Data.x1;
  let num_seg = Data.n;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpsonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x", () => {
    const result = component.calcularSimpson(x0, x1, num_seg);
    expect(result).toBeCloseTo(16.0, 1);
  });
});
