var isaRunning = true;
while (isaRunning) {
  var a = Math.floor(Math.random() * 10 + 1);
  if (a == 7) {
    console.log("You got right number");
    isaRunning = false;
  } else {
    console.log("Try Again!" + "You have got " + a);
  }
}
