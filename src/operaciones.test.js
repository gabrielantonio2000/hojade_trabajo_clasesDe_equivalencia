import {
  resta,
  suma,
  multiplicacion,
  division
} from "./operaciones";

describe("Pruebas en operaciones.js", () => {
  // Pruebas matemáticas
  test("probar funcion suma", () => {
    expect(suma(1, 2)).toBe(3);
  });

  test("probar funcion resta", () => {
    expect(resta(3, 2)).toBe(1);
  });

  test("probar funcion multiplicacion", () => {
    expect(multiplicacion(3, 2)).toBe(6);
  });

  test("probar funcion division", () => {
    expect(division(6, 2)).toBe(3);
  });

  test("probar funcion division entre 0", () => {
    expect(() => division(6, 0)).toThrow("No se puede dividir por 0");
  });

});
