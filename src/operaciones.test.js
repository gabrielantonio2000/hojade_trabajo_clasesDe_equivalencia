import { resta, suma, multiplicacion, division, determinarAprobacionPrestamo } from './operaciones';

describe('pruebas en operaciones.js', () => {
  test('probar funcion suma', () => {
    expect(suma(1, 2)).toBe(3);
  });

  test('probar funcion resta', () => {
    expect(resta(3, 2)).toBe(1);
  });

  test('probar funcion multiplicacion', () => {
    expect(multiplicacion(3, 2)).toBe(6);
  });

  test('probar funcion division', () => {
    expect(division(6, 2)).toBe(3);
  });

  test('probar funcion division entre 0', () => {
    expect(() => division(6, 0)).toThrow('No se puede dividir por 0');
  });
});

// Pruebas para la función determinarAprobacionPrestamo
  test('préstamo no aprobado para estudiantes', () => {
    expect(determinarAprobacionPrestamo('E', false)).toBe('El préstamo no está aprobado.');
  });

  test('préstamo aprobado para trabajadores', () => {
    expect(determinarAprobacionPrestamo('T', false)).toBe('El préstamo está aprobado.');
  });

  test('préstamo no aprobado para retirados con deudas', () => {
    expect(determinarAprobacionPrestamo('R', true)).toBe('El préstamo no está aprobado.');
  });

  test('préstamo aprobado para retirados sin deudas', () => {
    expect(determinarAprobacionPrestamo('R', false)).toBe('El préstamo está aprobado.');
  });

  test('tipo de solicitante inválido', () => {
    expect(determinarAprobacionPrestamo('X', false)).toBe(
      'Tipo de solicitante inválido. Las opciones válidas son: E (Estudiante), T (Trabajador), R (Retirado).'
    );
  });

