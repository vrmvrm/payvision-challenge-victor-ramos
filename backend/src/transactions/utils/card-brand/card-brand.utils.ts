const cardBrands = [
  {
    regex: /^5[1-5]/,
    brand: 'MasterCard',
  },
  {
    regex: /^3[47]/,
    brand: 'AMEX',
  },
  {
    regex: /^6(?:011|5[0-9]{2})/,
    brand: 'Discover',
  },
  {
    regex: /^3(?:0[0-5]|[68][0-9])/,
    brand: 'Diners Club',
  },
  {
    regex: /^4/,
    brand: 'VISA',
  },
];

export function getCardBrand(firstSixDigits: string): string {
  for (const { regex, brand } of cardBrands) {
    if (firstSixDigits.match(regex)) {
      return brand;
    }
  }
  return 'not brand';
}
