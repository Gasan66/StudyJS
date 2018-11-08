var user = {};
user.name = "Tom";
user.age = 26;
user.display = function(){

    console.log(user.name);
    console.log(user.age);
};
user.fiz = {'weight': 187}
var hasNameProp = "name" in user;
console.log(hasNameProp);
var hasWeightProp = "weight" in user;
console.log(hasWeightProp);
console.log(user.fiz.weight)


// constructor

function User(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};

function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
    };
};

var tom = new User("Том", 26);
tom.displayInfo();
var bentley = new Car("Бентли", 2004);
tom.driveCar(bentley);
console.log(tom.maxAge)

User.prototype.maxAge = 110

var jack = new User('Джек', 22)
jack.displayInfo()
console.log(jack.maxAge)