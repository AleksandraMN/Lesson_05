'use strict';

const str = "Добрый день!";

const invertedStr = (x) => {
   const newStr =  x.split('').reverse().join('');  
   return newStr;
};

console.log(invertedStr(str));
