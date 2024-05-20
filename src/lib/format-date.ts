/**
 * Formats a given date using Intl.DateTimeFormat.
 * 
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string.
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
}
