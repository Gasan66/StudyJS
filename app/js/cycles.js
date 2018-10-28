var people = ['Tom', 'Alice', 'John', 'Bob', 'Sam']
for (var i = 0; i<people.length; i++) {
    console.log(people[i]);
}

for (var index in people) {
    console.log(people[index] + '!');
}

for (var user of people) {
    console.log(user)
}

var index = 0;
while(index < people.length){

    console.log(people[index] + ' while');
    index++;
}

var x = 1;
do{
    console.log(x * x);
    x++;
}while(x < 1)

var array = [ 1, 2, 3, 4, 5, 12, 17, 6, 7 ];
for (var i = 0; i < array.length; i++)
{
    if (array[i] > 10)
        break;
    document.write(array[i] + "</br>");
}

for (var i = 0; i < array.length; i++)
{
    if (array[i] > 10)
        continue;
    document.write(array[i] + "</br>");
}