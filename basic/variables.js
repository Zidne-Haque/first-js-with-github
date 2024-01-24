const accountId = 10000
let accountEmail = "zidne@google.com"
var accountPassword = "12345"
accountCity = "Dhaka"

/*
prefer not to use var
beacuse of issue in block scope and functional scope
*/

accountEmail = "zidne@yahoo.com"
accountPassword = "112233"
accountCity = "Sylhet"

console.table([accountId, accountEmail, accountPassword, accountCity]);