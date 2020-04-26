const numberToCurrency = (initialCurrency: number, maxGroup: number): string => {
  const regex = new RegExp(`\\d{1, ${maxGroup}}`, 'g');
  const value = (Array as any)
    .from(String(initialCurrency))
    .reverse()
    .join('')
    .match(regex)
    ?.reverse()
    .map((o: string) => (Array as any).from(o).reverse().join(''))
    .join(' ');
  return value;
};

export = {
  numberToCurrency,
};
