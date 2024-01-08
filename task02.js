'use strict';

const phrase1 = "добрый день!";
const phrase2 = "добрый День!";

const changeString = (x) => {
   const newPhrase = x[0].toUpperCase() + x.substring(1).toLowerCase();
   return newPhrase;
};

console.log(changeString(phrase1));
console.log(changeString(phrase2));
