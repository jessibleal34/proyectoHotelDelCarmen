
export function generateId() {
  return crypto.randomUUID();
}

export function calculateNights(inDate, outDate) {
  return Math.max(1, (new Date(outDate) - new Date(inDate)) / 86400000);
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(value);
}

