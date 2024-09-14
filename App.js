const favactorfirstname = "tony"
const favactorlastname = "jaa"
const fullname = favactorfirstname+"tony" + favactorlastname+"jaa"

const uppercase = fullname.touppercase("TONY JAA")
const lowercase = fullname.lowercase("tony jaa")

let message = "my favorite actor is ""tony jaa"+ uppercase"TONY JAA";
message += "his best movie is the paradox";

console.log("tony:", favactorfirstname);
console.log("jaa:", favactorlastname);
console.log("tony jaa:",favactorfullname);
console.log("TONY JAA:", UPPERCASE);
console.log("tony jaa:", lowercase);
console.log("tony jaa is an actor in the paradox:",message);
