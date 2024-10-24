import { ComponentFixture, TestBed } from "@angular/core/testing";
import Data from "./dates.json";
import { Simpson2Component } from "./simpson2.component";

describe("Simpson2Component", () => {
  let component: Simpson2Component;
  let fixture: ComponentFixture<Simpson2Component>;
  let x0 = Data.x0;
  let x1 = Data.x1;
  let num_seg = Data.n;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simpson2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Simpson2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2", () => {
    const result = component.calcularSimpson(x0, x1, num_seg);

    expect(result.resultado).toBeCloseTo(0.3333, 4);
    expect(result.funcion).toBe("f(x) = x^2");
    expect(result.error).toBe(0.0001);
  });
});
