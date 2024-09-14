// Función para determinar el precio de envío basado en el peso del paquete
export const calcularPrecioEnvio = (peso) => {
  if (peso <= 0) {
    throw new Error("El peso debe ser un valor positivo.");
  } else if (peso <= 1) {
    return 5;
  } else if (peso <= 5) {
    return 10;
  } else if (peso <= 10) {
    return 15;
  } else {
    return 20;
  }
};
