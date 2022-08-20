export const currencyISOToSign = (currency: string): string =>
  Number()
    .toLocaleString(undefined, { style: "currency", currency })
    .slice(0, 1);
