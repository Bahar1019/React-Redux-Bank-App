export function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR',
  }).format(value);
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  return new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();

  // Check if the date is valid
  if (isNaN(d2)) {
    return 'Invalid time value';
  }

  return Math.round((d2 - d1) / 60000);
}
