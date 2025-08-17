function manualException () {

    const randomNumber = Math.random();
    console.log(`Generated random number: ${randomNumber}`);

    if (randomNumber % 2 === 0) {
        // If the random number is even, return it
        return randomNumber;
    } else {
        // If the random number is odd, throw an exception
        throw "Random number is odd, throwing an exception";
    }
}