var digits = ["-","-","-","-"]

function updateDigits() {
  document.getElementById("dig1").innerHTML = digits[0];
  document.getElementById("dig2").innerHTML = digits[1];
  document.getElementById("dig3").innerHTML = digits[2];
  document.getElementById("dig4").innerHTML = digits[3];
}

updateDigits();

function checkCode(arr) {
  if (arr == [6,9,6,9].toString()) {
    success();
  }
}

function success() {
  document.getElementById("dig1").style.backgroundColor = "green";
  document.getElementById("dig2").style.backgroundColor = "green";
  document.getElementById("dig3").style.backgroundColor = "green";
  document.getElementById("dig4").style.backgroundColor = "green";
}

function clearDisplay() {
  digits = ["-","-","-","-"];
  updateDigits();
}

function deleteItem() {
  digits.unshift("-");
  digits.pop();
  updateDigits();
}

function onPress(num) {
  digits.push(num);
  digits.shift();
  updateDigits();
  checkCode(digits);
}
