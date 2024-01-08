'use strict';

const doll = 64;
const evr = 1.2 * doll;

const  transferCurrency = (x) => {
   const result = x * evr;
   return result;
};

console.log(`Стоимость покупки в евро равна ${transferCurrency(1000)} рублей.`);

