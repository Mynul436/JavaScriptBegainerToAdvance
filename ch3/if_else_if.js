var a = 10;
var b = 20;
if (a > b) {
  console.log("A is greater than B");
} else {
  console.log("A is less than B");
}
var w = new Date();

var today = w.getDay();
console.log(today);

switch (today) {
  case 0:
    console.log("Today is Satarday");
    break;
  default:
    console.log("Not a valid day");
}
