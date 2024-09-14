// prestamo.js
export const determinarAprobacionPrestamo = (tipo, deudas) => {
  if (tipo === "E") {
    // Estudiante: El préstamo no se aprueba sin importar si tiene deudas o no
    return "El préstamo no está aprobado.";
  } else if (tipo === "T") {
    // Trabajador: El préstamo está aprobado sin importar si tiene deudas o no
    return "El préstamo está aprobado.";
  } else if (tipo === "R") {
    // Retirado: El préstamo está aprobado solo si no tiene deudas
    return deudas === false
      ? "El préstamo está aprobado."
      : "El préstamo no está aprobado.";
  }
  // Tipo inválido
  return "Tipo de solicitante inválido. Las opciones válidas son: E (Estudiante), T (Trabajador), R (Retirado).";
};
