const accountId = 144553
let accountEmail = "pinank@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;
/*
prefer not to use var 
because of block scope and functional scope
*/
// accountId = 2 //not allowed
accountEmail = "pin@gmail.com"
accountPassword = "21212121"
accountCity = "Banglore"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

