
//antes de es6
function newFunction( name, age, country) {
    var name = name || 'Chema';
    var age = age || 25;
    var country = country || 'España';
    console.log(name, age, country);
}

//post es6

function newFunction2(name2 = 'Chema', age2 = 25, country2 = 'España'){
    console.log(name2, age2, country2);
};

newFunction2();
newFunction2('Ricarda', '24', 'CO');

//Templates literals es para unir varios elementos

let hello ='Hello';
let world = 'world';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
// los tamplate literals me permiten ejecutar el código sin tener que poner esta parte de los sumatorios y que sea tan tediosa con lo siguientes 
let epicPhrase2 = `${hello} ${world}`; // son las comillas transversas las que nos permiten hacer eso con el formato de los dolares y así cuantas let queramos
console.log(epicPhrase2);

// LET y CONST, Multilínea, Spread Operator y Desestructuración //

//antes de es6
let lorem = " Esto es una frase épica. De tan épica que és, deja de serlo \n"
+ "y la otra frase más épica que la anterior"
//para unir distintas frases, se usaba este \n y el + pero desde que está es6 se usa lo siguiente: 
let lorem2 = `Esto es una frase épica. De tan épica que és, deja de serlo
y la otra frase más épica que la anterior`
// con la función de las comillas ivertidas, con simplemente darle al enter para bajar una linea, ya se nos cambiaría de linea sin tener que poner el \n
console.log(lorem);
console.log(lorem2);

//estructuración de elementos

let person = {
    'name': 'Chema',
    'age': 25,
    'country': 'España'
}
//para entrar a ellos como es un objeto tendría que poner:
console.log(person.name, person.age, person.country);

//pero con es6 ya no tengo que hacer eso

let {name, age, country} = person;
console.log(name, country);


//OPERADOR DE PROPAGACIÓN

let team1 = [ 'Oscar', 'Julian', 'María'];
let team2 = ['Valeria', 'Yesica', 'Mario'];

let education = ['David',...team1,...team2];
console.log(education);
//los 3 puntos y luego el nombre del array nos permite traer el arreglo que necesito a mi nuevo array pero de una manera más sencilla con es6 que sin este es6, tendríamos que copiar todo el team1 y 1 en el array education

//VARIABLES 

//la palabra reservada "var" nos permite acceder a ella desde cualquier parte ya que es una variable global mientras que la variable "let", solo nos permititía acceder desde su propio scope y no desde uno global.
//y la palabra clave "const" es aun más estricta porque esta variable es inmutable mientras que la palabra "var" si puedo renombrarla y darle un valor nuevo.

//Arrow Functions, Promesas y Parámetros en objetos

let name1 = 'Chema';
let age1 = 25;

obj = {name1: name1, age1: age1};

//para acceder al obj tendría que poner lo anterior, sin embargo con es6 puedo poner lo siguiente y es mucho mas amigable
obj2 = {name1, edad1};

console.log(obj2)

//arrow functions (son funciones anonimas)

const names = [
    {name: 'Oscar', age: 23},
    {name: 'Yesica', age: 26}
]
//para mostrarlos en la consola sería
let listOfNames = names.map(function(item){
    console.log(item.name);
})
//con las arrow sería
let listOfNames2 = names.map(item => console.log(item.name));
//otras formas

const listOfNames3 = (name, age, country) => {
    //bloque de codigo
}

const listOfNames4 = name => {
    //codigo
}

const square = num => num * num;

//PROMESAS

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject ('Ups!');
        }
    });
}

helloPromise()
    .them(response => console.log(response))
    .tehm (() => console.log('Hola'))
    .catch(error => console.log(error));

//CLASES, MÓDULOS Y GENERADORES

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator;
console.log(calc.sum(2,2));

//De la parte del scrip módulo, voy a importar el hello

import {hello} from './módulos';

//para llamarla:
hello();

//GENERADORES

function* helloWorld (){
    if (true){
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);//este último nos dará undefined porque en la lógica, solo hemos hecho 2 if en la función helloWorld