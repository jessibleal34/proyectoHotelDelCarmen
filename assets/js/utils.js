export function generateId() {
  return crypto.randomUUID();
}

export function calculateNights(checkIn, checkOut) {

  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const difference = end - start;

  return difference / (1000 * 60 * 60 * 24);
}

export function formatCurrency(value) {

  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(value);
}