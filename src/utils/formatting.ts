const dollarsUS = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const toCurrency = (value: number): string => {
  return dollarsUS.format(value);
};

export const toPercent = (value: number): string => {
  return parseFloat(value.toString()).toFixed(2) + '%';
};
