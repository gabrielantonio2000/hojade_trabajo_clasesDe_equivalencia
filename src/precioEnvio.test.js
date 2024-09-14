import { calcularPrecioEnvio } from "./precioEnvio";

describe("Pruebas en calcularPrecioEnvio.js", () => {
  test("Precio para peso en el límite inferior (0.5 kg)", () => {
    expect(calcularPrecioEnvio(0.5)).toBe(5);
  });

  test("Precio para peso en el límite superior del primer rango (1 kg)", () => {
    expect(calcularPrecioEnvio(1)).toBe(5);
  });

  test("Precio para peso en el límite inferior del segundo rango (1.5 kg)", () => {
    expect(calcularPrecioEnvio(1.5)).toBe(10);
  });

  test("Precio para peso en el límite superior del segundo rango (5 kg)", () => {
    expect(calcularPrecioEnvio(5)).toBe(10);
  });

  test("Precio para peso en el límite inferior del tercer rango (5.5 kg)", () => {
    expect(calcularPrecioEnvio(5.5)).toBe(15);
  });

  test("Precio para peso en el límite superior del tercer rango (10 kg)", () => {
    expect(calcularPrecioEnvio(10)).toBe(15);
  });

  test("Precio para peso justo fuera del límite del tercer rango (10.5 kg)", () => {
    expect(calcularPrecioEnvio(10.5)).toBe(20);
  });

  test("Debería lanzar un error para peso negativo", () => {
    expect(() => calcularPrecioEnvio(-1)).toThrow(
      "El peso debe ser un valor positivo."
    );
  });

  test("Debería lanzar un error para peso igual a 0", () => {
    expect(() => calcularPrecioEnvio(0)).toThrow(
      "El peso debe ser un valor positivo."
    );
  });
});
