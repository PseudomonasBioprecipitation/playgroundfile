document.getElementById('myButton').addEventListener('click', function() {
    this.textContent = 'You pressed the button!';
});
document.getElementById("contactForm").addEventListener("submit", function(event){
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  console.log("Name: " + name + ", Email: " + email);
});