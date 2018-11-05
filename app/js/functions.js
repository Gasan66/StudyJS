function display(x){

    var z = x * x;
    document.write(x + " в квадрате равно " + z + '</br>');
}
display(5)

function goodMorning(){

    document.write("Доброе утро" + "</br>");
}
function goodEvening(){

    document.write("Добрый вечер" + "</br>");
}
var message = goodMorning;
message(); // Доброе утро
message = goodEvening;
message(); // Добрый вечер


function sum(a, b, c){
    let d = a + b + c;
    console.log(d);
}
sum(1, 2, 3);
let nums = [4, 5, 6];
sum(...nums);

function f() {
    var z = 1;
    for (var x of arguments) {
        z *= x
    }
    console.log(z)
}

f(6, 7, 8)

function sum(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function operation(x, y, func){

    var result = func(x, y);
    console.log(result);
}

console.log("Sum");
operation(10, 6, sum);

console.log("Subtract");
operation(10, 6, subtract);

function menu(n){

    if(n==1) return function(x, y){ return x+y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return undefined;
}

for(var i=1; i < 5; i++){
    var action = menu(i);
    if(action!==undefined){
        var result1 = action(5, 4);
        console.log(result1);
    }
}


// recursion

function getFactorial(n){
    if (n === 1){
        return 1;
    }
    else{

        return n * getFactorial(n - 1);
    }
}

var result2 = getFactorial(4);
console.log(result2); // 24

function getFibonachi(n)
{
    if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return getFibonachi(n - 1) + getFibonachi(n - 2);
    }
}
var result = getFibonachi(8); //21
console.log(result); // 21


// redefinition

function display1(){
    console.log("Доброе утро");
    display1 = function(){
        console.log("Добрый день");
    }
}

display1(); // Доброе утро
display1(); // Добрый день

function display2(){
    console.log("Доброе утро");
    display2 = function(){
        console.log("Добрый день");
    }
}
// присвоение ссылки на функцию до переопределения
var displayMessage = display2;
display2(); // Доброе утро
display2(); // Добрый день
displayMessage(); // Доброе утро
displayMessage(); // Доброе утро
var displayMessage2 = display2;
displayMessage2();


// hoisting

console.log(foo);   // undefined
var foo = "Tom";

displayHoisting();

function displayHoisting(){
    console.log("Hello Hoisting");
}

// displayHoisting1();
//
// var displayHoisting1 = function (){
//     console.log("Hello Hoisting");
// }



// change transmitted object

function change(user){
    user.name = "Tom";
}

var bob ={
    name: "Bob"
};
console.log("before change:", bob.name);    // Bob
change(bob);
console.log("after change:", bob.name);     // Tom


function change1(user){
    // полная переустановка объекта
    user = {
        name:"Tom"
    };
    console.log(user);
}

var bob1 ={
    name: "Bob"
};

console.log("before change:", bob1.name);    // Bob
change1(bob1);
console.log("after change:", bob1.name);     // Bob



// arrow functions

let sum1 = (x, y) => x + y;
let a = sum1(4, 5);      // 9
let b = sum1(10, 5);     // 15



let user = (userName, userAge) => ({name: userName, age: userAge});

let tom = user("Tom", 34);
let bob2 = user("Bob", 25);

console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob2.name, bob2.age);     // "Bob", 25
