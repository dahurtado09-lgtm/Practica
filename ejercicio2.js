/* Número par o impar, Declara un número.
Usa un condicional (if) para mostrar si es par o impar. */

let numero = 9; 

if (numero % 2 === 0){
    console.log(`el numero ${numero} es par`)
}
else{
    console.log("Es impar\n")
}

/*Array de números. Crea un array con 10 números.
Recorre el array y muestra solo los números mayores que 5.*/

let numeros = [2, 1, 4, 10, 3, 13, 200, 0, 12, 6];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i] > 5){
        console.log(`Los numeros mayores a 5 son: ${numeros[i]}`); 
    }
}

/*Contador con while. Usa un while para contar del 1 al 10. Imprime cada número en consola. */
let i = 0
while (i < 10){
    console.log(i);
    i++; 
}
