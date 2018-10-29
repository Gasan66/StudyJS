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