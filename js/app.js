'use strict';

console.log('hi');

let amIFromSanfrancisco = prompt('Am I from San Francisco? Yes or No?').
toLowerCase();
console.log(amIFromSanfrancisco);

//let lowerCaseSanfrancisco = amIFromSanfrancisco.toLowerCase();
//console.log(lowerCaseSanfrancisco);

if (amIFromSanfrancisco === 'yes' || amIFromSanfrancisco === 'y') {
  console.log('Yes, I am from San Francisco');
} else if (amIFromSanfrancisco === 'no' || amIFromSanfrancisco === 'n') {
  console.log('No, I am from san francisco');
} else {
  console.log('please answer with a yes or no');
}

let username = prompt('what is your name?');
console.log(username);
alert ('Hello' + username);



