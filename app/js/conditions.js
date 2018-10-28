var a = 5 + 8;
document.write('Результат операции');
document.write(a);
var user = {name: "Tom", age:24};
console.log(user);
var x = 41;
var y = 5;
var z = x / y;
console.log(z)
// var strSum = prompt('Введите сумму вклада', 1000);
// console.log(strSum)
// var strPercent = prompt("Введите процентную ставку", 10);
// console.log(strPercent)
// var sum = parseInt(strSum);
// var procent = parseInt(strPercent);
// sum = sum + sum * procent / 100;
// alert("После начисления процентов сумма вклада составит: " + sum);
var people = ["Tom", "Alice"];
document.write(...people);
people[7] = 123;
people[2] = 34;
// people[3] = 87;
people[4] = 'ert'
console.log(people[7]);
console.log(people[6])
console.log(...people)
var numbers2 = [[0, 1, 2], [3, 4, 5] ];
var income = 100;
var age = 0;
if(age){

    var message = "доход больше 50";
    alert(message);
}
var income = 300;
switch(income){

    case 100 :
        console.log("Доход равен 100");
        break;
    case 200 :
        console.log("Доход равен 200");
        break;
    case 300 :
        console.log("Доход равен 300");
        break;
    default:
        console.log("Доход неизвестной величины");
        break;
}
var a = 2;
var b = 1;
var result = a < b ? a + b : a - b;
console.log(result);