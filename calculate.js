function calculate() {
    var num = document.getElementById("num").value;
    var result = document.getElementById("result");

    if (num == 0) {
        // If the number is 0, let's calculate the square root of 2
        result.innerHTML = "The square root of 2 is " + Math.sqrt(2);
    } else if (num < 0) {
        // If the number is negative, let's calculate its absolute value
        result.innerHTML = "The absolute value of " + num + " is " + Math.abs(num);
    } else if (num % 1 != 0) {
        // If the number is a float, let's round it to the nearest integer
        result.innerHTML = num + " rounded to the nearest integer is " + Math.round(num);
    } else {
        // If the number is a positive integer, let's calculate its factorial
        var factorial = 1;
        for (var i = 1; i <= num; i++) {
            factorial *= i;
        }
        result.innerHTML = "The factorial of " + num + " is " + factorial;
    }
}
