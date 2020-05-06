var secretNumber = Math.floor(Math.random() * 100) + 1;
var howManyGuesses = 0;
var guessedNumbersArray = [];

function usersGuess(){
    
    var guessedNumber = parseInt(document.getElementById("guessField").value);
    
    if (guessedNumber == secretNumber){
        
        howManyGuesses++;

        document.getElementById("messages").innerHTML = "Arvasit luvun " + secretNumber +
        " oikein! Hyväksyttyjä arvauskertoja: " + howManyGuesses;

        document.getElementById("guessButton").disabled = true;
        document.getElementById("guessField").disabled = true;

        guessedNumbersArray.push(guessedNumber);
    }

    else if (isNaN(guessedNumber)){
        
        document.getElementById("messages").innerHTML = "Syötä NUMERO!";
    }

    else if (guessedNumber < 1 || guessedNumber > 100){
        
        document.getElementById("messages").innerHTML = "Anna luku väliltä 1 - 100.";
    }

    else if (guessedNumbersArray.includes(guessedNumber)){

        document.getElementById("messages").innerHTML = "Olet jo arvannut luvun "
        + guessedNumber + ".";
        
    }

    else if (secretNumber > guessedNumber){
        
        howManyGuesses++;

        document.getElementById("messages").innerHTML = "Arvottu luku on suurempi kuin "
        + guessedNumber + ".";

        guessedNumbersArray.push(guessedNumber);
    }

    else if (secretNumber < guessedNumber){
        
        howManyGuesses++;

        document.getElementById("messages").innerHTML = "Arvottu luku on pienempi kuin "
        + guessedNumber + ".";

        guessedNumbersArray.push(guessedNumber);
    }

    document.getElementById("guessField").value = "";

    document.getElementById("wrongGuesses").innerHTML = guessedNumbersArray;
}