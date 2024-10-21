import {
  procesarArrays,
  xx,
  mediax,
  mediay,
  sumarCuadrados,
  Pendiente,
  Pendiente2,
  Pendienteverdadera,
  ordenada,
  ecuacionrecta,
  ecuacionrectaif,
} from "./Calculate";
import testuno from "./test1.json";

describe("calculate test", () => {
  let test1: number[] = testuno.x;
  let test2: number[] = testuno.y;
  let ejemplo: number[] = [
    24180, 454350, 13068, 40800, 37248, 99962, 18905, 1786050, 289984, 1538561,
  ];
  let ejemplo2: number[] = [
    16900, 422500, 9801, 22500, 16384, 91204, 9025, 893025, 135424, 923521,
  ];

  it("retorna la sumatoria de x * y", () => {
    const result = procesarArrays(test1, test2);
    expect(result).toEqual(4303108);
  });

  it("retorna la media de x", () => {
    const result = mediax(test1);
    expect(result).toEqual(382.8);
  });

  it("retorna la media de y", () => {
    const result = mediay(test2);
    expect(result).toEqual(638.9);
  });

  ///////// parte superior
  it("parte superior", () => {
    const result = Pendiente(test1, test2);
    expect(result).toBeCloseTo(1857398.8, 1);
  });

  ///////// parte superior
  it("parte inferior", () => {
    const result = Pendiente2(test1, test2);
    expect(result).toEqual(1074925.6);
  });

  it("Should return B1=1.7279 with the dataset Data_Test1", () => {
    const result = Pendienteverdadera(test1, test2);
    expect(result).toBeCloseTo(1.727932426, 1);
  });
  it("Should return B0=-22.55 with the dataset is proxy_size: [130, 650, 99, …], and  actual_added: [186, 699, 132, ...]", () => {
    const result = ordenada(test1, test2);
    expect(result).toBeCloseTo(-22.55253275);
  });
  it("Should return yk=644.429 with the dataset Data_Test1 if x=386", () => {
    const result = ecuacionrectaif(test1, test2);
    expect(result).toBeCloseTo(644.4293838, 1);
  });
});
