/*function calcDifference() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var result = Math.abs(num1 - num2);
  document.getElementById('result').value = result;
}*/
function calcDifference() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var result = num1 - num2;
  document.getElementById('result').value = result;
}
