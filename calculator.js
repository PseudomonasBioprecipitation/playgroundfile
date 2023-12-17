function difference(num1, num2) {
  return Math.abs(num1 - num2);
}

function calcDifference() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var result = difference(num1, num2);
  document.getElementById('result').value = result;
}
