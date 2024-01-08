'use strict';

const calculate = (sum, count, promo) => {
   let discount = 0;
   let totalPrise = sum;

   if (count > 10) {
      discount = totalPrise * 0.03;
      totalPrise = totalPrise - discount;
   }
   if (totalPrise > 30000) {
      discount = (totalPrise - 30000) * 0.15;
      totalPrise = totalPrise - discount; 
   }
   if (promo === 'METHED') {
      discount = totalPrise * 0.10;
      totalPrise = totalPrise - discount;
   }
   if (promo === 'G3H2Z1' && totalPrise > 2000) {
      totalPrise = totalPrise - 500;
   }
   return totalPrise;
};

console.log(calculate(62000, 1, 'METHED'));
