export const currency = (symbol: string, number: string, lang?: string) => {
  const parsedNumber = parseInt(number, 10);
  const negativeNumber = parsedNumber < 0;

  return `${negativeNumber ? '- ' : ''}${symbol ? `${symbol}` : ''}${String(
    Math.abs(parsedNumber) || 0
  ).replace(/(\d)(?=(\d{3})+(?!\d))/g, symbol === 'USD' || lang === 'en' ? '$1,' : '$1.')}`;
};
