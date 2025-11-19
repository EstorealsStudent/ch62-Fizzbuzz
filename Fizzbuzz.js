
//Seleccionamos el contenedor donde se mostrará el resultado que es del html "Div" con el id "fizzbuzz-container"
const salida  = document.getElementById("fizzbuzz-container");

//Función llamada "ImprimirFizBuzz" para imprimir el resultado en el contenedor seleccionado el cual le tendremos que pasar el mensaje a imprimir
function ImprimirFizBuzz(Mensaje) {

    //Creamos un párrafo para cada mensaje en la constante "parrafo" crea el parrafo "p"
    const parrafo = document.createElement("p");
    //Asignamos el mensaje a la variable parrafo
    parrafo.textContent = Mensaje;
    //Agregamos el párrafo al contenedor "Div" de la variable salida, con el appeldChild se agrega el parrafo dentro del contenedor "Div"
    salida.appendChild(parrafo);
}



//Con el for inicializamos en 0 y terminamos en 100
for (let i = 0; i < 101; i++) {
  
    //Condicionales para determinar si es Fizz, Buzz o FizzBuzz
    
    //Primero verificamos si es divisible entre 3 y 5
 if(i % 3 == 0 && i % 5 == 0) {

    //Mandamos a llamar a la función ImprimirFizBuzz con el mensaje "FizzBuzz"
    ImprimirFizBuzz("FizzBuzz");
 }
    //Luego verificamos si es divisible entre 3
    else if(i % 3 == 0) {
        //Mandamos a llamar a la función ImprimirFizBuzz con el mensaje "Fizz"
    ImprimirFizBuzz("Fizz");
    }
    //Luego verificamos si es divisible entre 5
    else if(i % 5 == 0) {
        //Mandamos a llamar a la función ImprimirFizBuzz con el mensaje "Buzz"
    ImprimirFizBuzz("Buzz");
    }
    //Si no es divisible entre ninguno, imprimimos el número
    else {

        //Mandamos a llamar a la función ImprimirFizBuzz con el número actual que esta dentro de la variable "i"
    ImprimirFizBuzz(i);
    }
}
