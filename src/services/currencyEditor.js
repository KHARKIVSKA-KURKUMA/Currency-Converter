import { currencyItems } from 'data/currency';

export const currencyEditor = code => {
  if (code) {
    return currencyItems.reduce((acc, element) => {
      if (code.includes(element.code)) {
        acc.push(element.currency);
      }
      return acc;
    }, []);
  }
};
