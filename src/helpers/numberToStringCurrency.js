const numberToStringCurrency = (sum, currency) => {
  const [intPart, floatPart] = sum
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .split('.');
  const floatString = floatPart ? '.' + floatPart.padEnd(2, '0') : '.00';
  return currency + intPart + floatString;
};

export default numberToStringCurrency;

// const total = 24000;

// const strBalance = sumToString(total, '₴ ') ==> '₴ 24 000.00'
// const strBalance = sumToString(total, '') ==> '24 000.00'
