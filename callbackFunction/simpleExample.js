function sayHello (callback) {
    // Do some task
    console.log("Hello, world");
    // Invoke the callback function
    callback();
}

function sayGoodbye () {
    // Do some task
    console.log("Goodbye, world");
    //Call the first function and pass this function as a callback
    sayHello(sayGoodbye);
    // The output will be:
    // Hello, world!
    // Goodbye, world!
}
