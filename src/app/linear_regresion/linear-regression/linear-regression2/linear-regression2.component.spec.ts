import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LinearRegression2Component } from "./linear-regression2.component";
import testuno from "./test2.json";

describe("LinearRegression2Component", () => {
  let component: LinearRegression2Component;
  let fixture: ComponentFixture<LinearRegression2Component>;

  // Variables de prueba
  let test1: number[] = testuno.x;
  let test2: number[] = testuno.y;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearRegression2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(LinearRegression2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("retorna la sumatoria de x * y", () => {
    const result = component.procesarArrays(test1, test2);
    expect(result).toEqual(4303108);
  });

  it("retorna la media de x", () => {
    const result = component.mediax(test1);
    expect(result).toEqual(382.8);
  });

  it("retorna la media de y", () => {
    const result = component.mediay(test2);
    expect(result).toEqual(638.9);
  });

  it("parte superior", () => {
    const result = component.Pendiente(test1, test2);
    expect(result).toBeCloseTo(1857398.8, 1);
  });

  it("parte inferior", () => {
    const result = component.Pendiente2(test1, test2);
    expect(result).toEqual(1074925.6);
  });

  it("Should return B1=1.7279 with the dataset Data_Test1", () => {
    const result = component.Pendienteverdadera(test1, test2);
    expect(result).toBeCloseTo(1.727932426, 1);
  });

  it("Should return B0=-22.55 with the dataset is proxy_size: [130, 650, 99, …], and actual_added: [186, 699, 132, ...]", () => {
    const result = component.ordenada(test1, test2);
    expect(result).toBeCloseTo(-22.55253275);
  });

  it("Should return yk=644.429 with the dataset Data_Test1 if x=386", () => {
    const result = component.ecuacionrectaif(test1, test2);
    expect(result).toBeCloseTo(644.4293838, 1);
  });
});
