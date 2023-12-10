document.getElementById('myButton').addEventListener('click', function() {
    this.textContent = 'You pressed the button!';
});
document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  console.log("Name: " + name + ", Email: " + email);
});
function calculateFactorial() {
  let num = document.getElementById("num").value;
  let result = factorial(num);
  document.getElementById("result").innerHTML = "The factorial of " + num + " is " + result;
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}