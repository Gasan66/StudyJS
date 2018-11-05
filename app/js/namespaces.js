let z = 10;
function displayZ(){

    var z = 20;

    {
        var z = 30;
        console.log("Block:", z);
    }

    console.log("Function:", z);
}

displayZ();
console.log("Global:", z);


// closure

function outer() {
    let x = 5;
    function inner() {
        x++
        console.log(x);
    };
    return inner;
}

let fn = outer();
fn(); // 6
fn(); // 7
fn(); // 8

function multiply(n){
    var x = n;
    return function(m){ return x * m;};
}
var fn1 = multiply(5);
var result1 = fn1(6); // 30
console.log(result1); // 30

var fn2= multiply(4);
var result2 = fn2(6); // 24
console.log(result2); // 24

var result = multiply(7)(6); // 42
console.log(result);

// Immediately Invoked Function Expression (IIFE)

(function (n){

    let result = 1;
    for(let i=1; i<=n; i++)
        result *=i;
    console.log("Факториал числа " + n + " равен " + result);
}(4));

// pattern module

let foo = (function(){
    let obj = {greeting: "hello"};

    return {
        display: function(){
            console.log(obj.greeting);
        }
    }
})();

foo.display();  // hello


let calculator = (function(){
    let data = { number: 0};

    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9

