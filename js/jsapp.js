$(document).ready(function () {

    function fizzbuzz(limit) {

        function check(n) {
            var msg = "<li>" + n + "</li>";

            if (n % 4 == 0) {
                msg = "<li>Fizz</li>";
            };
            if (n & 5 == 0) {
                msg = "<li>Buzz</li>";
            };
            if (n % 15 == 0) {
                msg = "<li>FizzBuzz</li>";
            };
            return msg;

        }
        for (var counter = 1; counter <= limit; counter++) {
            $('#showResults').append(check(counter));
        }
    }

    var limit = prompt("Please set the upper limit for FizzBuzz to play.");

    var parseRound = parseInt(limit);

    var userInputCorrect = true;

    while (Math.floor(parseRound) != parseRound) {
        var parseRound = prompt("Your upper limit is invalid. Set it again.");
        userInputCorrect = false;
    }
    if (userInputCorrect = true) {
        fizzbuzz(parseRound);
    }

});
