// prestamo.test.js
import { determinarAprobacionPrestamo } from "./prestamo";

describe("Pruebas para determinar la aprobación de un préstamo", () => {
  test("El préstamo no está aprobado para estudiantes, sin importar las deudas", () => {
    expect(determinarAprobacionPrestamo("E", false)).toBe(
      "El préstamo no está aprobado."
    );
    expect(determinarAprobacionPrestamo("E", true)).toBe(
      "El préstamo no está aprobado."
    );
  });

  test("El préstamo está aprobado para trabajadores, sin importar las deudas", () => {
    expect(determinarAprobacionPrestamo("T", false)).toBe(
      "El préstamo está aprobado."
    );
    expect(determinarAprobacionPrestamo("T", true)).toBe(
      "El préstamo está aprobado."
    );
  });

  test("El préstamo está aprobado para retirados sin deudas", () => {
    expect(determinarAprobacionPrestamo("R", false)).toBe(
      "El préstamo está aprobado."
    );
  });

  test("El préstamo no está aprobado para retirados con deudas", () => {
    expect(determinarAprobacionPrestamo("R", true)).toBe(
      "El préstamo no está aprobado."
    );
  });

  test("Tipo de solicitante inválido", () => {
    expect(determinarAprobacionPrestamo("X", false)).toBe(
      "Tipo de solicitante inválido. Las opciones válidas son: E (Estudiante), T (Trabajador), R (Retirado)."
    );
  });
});
