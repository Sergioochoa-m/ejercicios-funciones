//EJERCICIO 1 FUNCIONES//

function saludar(nombre){
    return `¡Hola ${nombre}!`;
}
{console.log(saludar(`pepe`))};

//EJERCICIO 2 FUNCIONES//

function sumar(a, b) {
  return a + b;
}

console.log(sumar(3, 4));


//EJERCICIO 3 FUNCIONES//

function esPar(numero) {
  
 return numero % 2 === 0;}
   
 console.log(esPar(4));

 //EJERCICIO 4 FUNCIONES//
//Tengo dudas//
function mayorDeTres(a, b, c) {
    if (a > b) {
        return a = `${a} Es mayor`
        }
    else if ( a > c){
        return a = `${a} es mayor`
    }
    else if (b > a) {
        return a = `${b} Es mayor`
        }
    else if ( b > c) {
        return a = `${b} es mayor`
    }
    else if (c > b) {
        return a = `${c} Es mayor`
        }
    else if ( c > a) {
        return a = `${c} es mayor`
    }
}
console.log(mayorDeTres(12, 7, 10))



 //EJERCICIO 5 FUNCIONES//

 function celsiusAFahrenheit(a) {
    return (a * 9/5) + 32 
 }
    console.log(celsiusAFahrenheit(12));

//EJERCICIO 6 FUNCIONES//

function clasificarNota(nota) {
    if (nota >= 90) {
        return nota =`la nota ${nota} es excelente`}
    else if (nota >= 70 <90) {
        return nota = `la nota ${nota} es buena`}
    else if (nota >= 50 <70) {
        return nota = `la nota ${nota} es regular`}
    else if (nota < 50) {
        return nota = `la nota ${nota} es insuficiente`
    }
}
console.log(clasificarNota(65));
