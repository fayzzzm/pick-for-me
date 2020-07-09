"use strict";
const numberToCurrency = (initialCurrency, maxGroup) => {
    const regex = new RegExp(`\\d{1, ${maxGroup}}`, 'g');
    const value = Array
        .from(String(initialCurrency))
        .reverse()
        .join('')
        .match(regex)
        ?.reverse()
        .map((o) => Array.from(o).reverse().join(''))
        .join(' ');
    return value;
};
module.exports = {
    numberToCurrency,
};
