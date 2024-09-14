import { determinarAprobacionPrestamo} from "./prestamo";
  
// Pruebas para determinarAprobacionPrestamo
  describe("Pruebas para la función determinarAprobacionPrestamo", () => {
    // Valores frontera y tabla de decisión

    test("préstamo no aprobado para estudiante sin deudas", () => {
      expect(determinarAprobacionPrestamo("E", false)).toBe(
        "El préstamo no está aprobado."
      );
    });

    test("préstamo no aprobado para estudiante con deudas", () => {
      expect(determinarAprobacionPrestamo("E", true)).toBe(
        "El préstamo no está aprobado."
      );
    });

    test("préstamo aprobado para trabajador sin deudas", () => {
      expect(determinarAprobacionPrestamo("T", false)).toBe(
        "El préstamo está aprobado."
      );
    });

    test("préstamo no aprobado para trabajador con deudas", () => {
      expect(determinarAprobacionPrestamo("T", true)).toBe(
        "El préstamo no está aprobado."
      );
    });

    test("préstamo aprobado para retirado sin deudas", () => {
      expect(determinarAprobacionPrestamo("R", false)).toBe(
        "El préstamo está aprobado."
      );
    });

    test("préstamo no aprobado para retirado con deudas", () => {
      expect(determinarAprobacionPrestamo("R", true)).toBe(
        "El préstamo no está aprobado."
      );
    });

    test("tipo de solicitante inválido", () => {
      expect(determinarAprobacionPrestamo("X", false)).toBe(
        "Tipo de solicitante inválido. Las opciones válidas son: E (Estudiante), T (Trabajador), R (Retirado)."
      );
    });
  });

