import { currencies, getSymbol, formatCurrency } from 'src/utils/currency';

describe('currency', () => {
  it('should get symbol', () => {
    const currency = Object.keys(currencies)[0];

    expect(getSymbol(currency)).toEqual(currencies[currency].symbol);
  });

  it('should format currency', () => {
    const currency = Object.keys(currencies)[0];
    const value1 = 1.2222;
    const value2 = 0.0005;

    const formattedValue1 = formatCurrency(value1, currency);
    const formattedValue2 = formatCurrency(value2, currency);

    expect(formattedValue1).toEqual(`${value1.toFixed(2)} ${currencies[currency].symbol}`);
    expect(formattedValue2).toEqual(`${value2} ${currencies[currency].symbol}`);
  });
});
