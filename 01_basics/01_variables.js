const accountId = 144553
let accountEmail = "shubham@gmail.com"
var accountPassword = "12345"
accountCity = "Gurugram"
let accountState

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "3216548"
accountCity = "Banglore"

console.log(accountId);

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
