setTimeout(function f() {
    console.log("Hello from AsyncNature.js");
}, 10);

setTimeout(function g () {
    console.log('wow, this is AsyncNature.js');
}, 5);

let x = 0;
for (let i = 0; i < 1000000000; i++) {
    x += i;
}