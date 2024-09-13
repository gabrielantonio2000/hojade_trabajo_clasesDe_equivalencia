export const suma = (a, b) => a + b;

export const resta = (a, b) => a - b;

export const multiplicacion = (a, b) => a * b;

export const division = (a, b) => {
  if (b === 0) {
    throw new Error('No se puede dividir por 0');
  }

  return a / b;

  
};


export const determinarAprobacionPrestamo = (tipo, deudas) => {
  if (tipo === "E") {
    return "El préstamo no está aprobado.";
  } else if (tipo === "T") {
    return "El préstamo está aprobado.";
  } else if (tipo === "R") {
    return deudas
      ? "El préstamo no está aprobado."
      : "El préstamo está aprobado.";
  }
  return "Tipo de solicitante inválido. Las opciones válidas son: E (Estudiante), T (Trabajador), R (Retirado).";
};
