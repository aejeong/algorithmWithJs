var javascriptObject = {};
var testArray = [1,2,3,4]

javascriptObject.array = testArray;
console.log(javascriptObject);

javascriptObject.title = 'Algorithms';
console.log(javascriptObject); // {array:[1,2,3,4],title:'Algoriths'}

function ExampleClass(){
    this.name = 'JavaScript';
    this.sayName = function(){
        console.log(this.name);
    }
}

var example1 = new ExampleClass();
example1.sayName(); // 'JavaScript';

function ExampleClass1(){
    this.array = [1,2,3,4,5];
    this.name = 'Javascript';
}

var example1 = new ExampleClass1()

ExampleClass1.prototype.sayName = function(){
    console.log(this.name);
}

example1.sayName(); // 'Javascript'

function ExampleClass2(name, size){
    this.name = name;
    this.size = size;
}

var example2 = new ExampleClass2('Public',5);
console.log(example2); // {name:'Public',size:5}

console.log(example2.name); // 'Public'
console.log(example2.size); // 5


function ExampleClass3(name,size){
    var privateName = name;
    var privateSize = size;

    this.getName = function(){return privateName}
    this.setName = function(name){privateName=name}

    this.getSize = function(){return privateSize}
    this.setSize = function(size){privateSize =size}
}

var example3 = new ExampleClass3("Sample",3);
example3.setSize(12);
console.log(example3.privateName); // undefined
console.log(example3.getName()); // 'Sample'
console.log(example3.size); // undefined
console.log(example3.getSize()); // 3

var emptyJSObj = {};
emptyJSObj['exampleKey'] = 'exampleValue';
emptyJSObj.exampleKey = 'exampleValue';

function Animal(name, animalType){
    this.name = name;
    this.animalType =animalType;
}

Animal.prototype.sayName = function(){
    console.log(this.name);
}

Animal.prototype.sayAnimalType = function(){
    console.log(this.animalType)
}

function Dog(name){
    Animal.call(this, name,"Dog")
}

Dog.prototype = Object.create(Animal.prototype);
var myAnimal = new Animal('ditto','pokemon');
myAnimal.sayName(); // 'diggo'
myAnimal.sayAnimalType(); // 'pokemon'
var myDog = new Dog('candy','dog');
myDog.sayName(); //'candy'
myDog.sayAnimalType() // 'dog'