//boleanos, null, undefined y number estos son datos primitivos

// constante con un numero
const number5 = 40

// variable local con un string
let string = "prueba 1"


// variable global con un boleano
var boleean = true
 

//tipos no primitivos 

// {} objetos son descriptivos 

const persona = {
     nombre: "Francisco",    
     apellido:"Fernandez" 

}

// [] arreglos diferencia solo recibe datos

const arreglo1 = [1,10,100,1000,1]
 
// dato tipo string

let string2 = "prueba 1"

// tipo bigint son numeros mas alla de una safe integer

// tipo symbol (+ - * / %)

//funcion

function suma(number1, number2) {
    return number1 + number2
}

// como mostrar datos

console.log(suma(10, 20)) 

console.log(persona.nombre)
console.log(persona.apellido)

console.log(suma(arreglo1[0],arreglo1[2]))
//          funcion suma arreglo1[0]=1 , arreglo1[2]=100

//hacer una funcion que multiplica dos numeros la funcion tiene que llamarse multiply

function multiply(number1, number2) {
    return number1 * number2
}

console.log(multiply(2, 8))

function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
    }
  
    return name;
  }

  console.log(getPlanetName(3)); 
    
  function solution(str){
    let arrStr = str.split("");
    
    return arrStr.reverse().join("");
  }
  // me devuelva abcdef alrrevez

const string3 = "abcdef"

console.log(solution(string3))

//si le doy un numero entonces devuelve odd si es un numero impar y even si es un numero par
function evenOrOdd(number) {
    if(number % 2 == 0){
     return("even")
    } else {
        return("odd")
    } 
   }
// el mismo codigo simplificado seria 

// function evenOrOdd(number){
//    return number % 2 === 0? "even" : "odd"
//   } //

// cuentes la cantidad de cabras con un array

arrSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]
    
     function countSheeps(x) { 
    return x.filter(Boolean).length;
     }
console.log(countSheeps(1))

