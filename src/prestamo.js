// Función para determinar la aprobación de un préstamo
export const determinarAprobacionPrestamo = (tipo, deudas) => {
  if (tipo === "E") {
    // Estudiante
    return deudas === false
      ? "El préstamo no está aprobado."
      : "El préstamo no está aprobado.";
  } else if (tipo === "T") {
    // Trabajador
    return deudas === false
      ? "El préstamo está aprobado."
      : "El préstamo no está aprobado.";
  } else if (tipo === "R") {
    // Retirado
    return deudas === false
      ? "El préstamo está aprobado."
      : "El préstamo no está aprobado.";
  }
  return "Tipo de solicitante inválido. Las opciones válidas son: E (Estudiante), T (Trabajador), R (Retirado).";
};
