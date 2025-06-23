const accountId = 144553// once value is assigned, it can't be changed later
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Varanasi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hk@hk.com"
accountPassword = "9541"
accountCity = "Varanasi"

console.log(accountId);

/*
var is globally scoped,while const and let are block scoped.
it is advised to use let rather than var
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])