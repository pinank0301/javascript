const name = "pinank"
const repoCount = 50

// console.log(name + repoCount + "Value"); // not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // readable

const gameName = new String("pinank-trivedi-com") // a way to declare string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 10)
console.log(anotherString);

const newString1 = "     pinank  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://axios.com/hitesh%20trivedi"

console.log(url.replace('%20', '-'));

console.log(url.includes('pinank'));

console.log(gameName.split('-'));
