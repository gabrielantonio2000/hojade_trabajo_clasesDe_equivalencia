import { resta, suma } from './operaciones';

describe('pruebas en operaciones.js', () => {
  test('probar funcion suma', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('probar funcion resta', () => {
    expect(resta(3, 2)).toBe(1);
  });
});
