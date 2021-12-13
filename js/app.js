'use strict';

console.log('hi');

let username = prompt('what is your name?');
console.log(username);
alert ('Hello' +  username);

let amIFromSanfrancisco = prompt('Am I from San Francisco? Yes or No?').
toLowerCase();
console.log(amIFromSanfrancisco);

let where  = prompt ('What Part of San Francisco?')
console.log(where);
alert (' I am from there too!' + username);

let favorite = prompt (' What is your favorite thing to do there?')
console.log(favorite);
alert ('that sounds like fun!' + username);

//let lowerCaseSanfrancisco = amIFromSanfrancisco.toLowerCase();
//console.log(lowerCaseSanfrancisco);

if (amIFromSanfrancisco === 'yes' || amIFromSanfrancisco === 'y') {
  console.log('Yes, I am from San Francisco');
} else if (amIFromSanfrancisco === 'no' || amIFromSanfrancisco === 'n') {
  console.log('No, I am from san francisco');
} else {
  console.log('please answer with a yes or no');
}

//if(whatPartOfSanFrancisco  === 'Mission District'
//document.write('Me too!');
 //else {
    //document.write('oh ok');
//}







