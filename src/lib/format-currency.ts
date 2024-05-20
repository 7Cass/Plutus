/**
 * Formats a given amount in cents to a specified currency format.
 * 
 * @param {number} amountInCents - The amount in cents to format.
 * @param {string} currency - The currency code to format the amount into (e.g., 'USD', 'EUR').
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(amountInCents: number, currency: CurrencyCode): string {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(amountInCents / 100);

  return formattedAmount;
}

type CurrencyCode = 'BRL' | 'USD' | 'EUR' | 'JPY'; // Add more currency codes as needed
