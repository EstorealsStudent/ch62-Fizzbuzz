
//Con el for inicializamos en 0 y terminamos en 100
for (let i = 0; i < 101; i++) {
  
    //Condicionales para determinar si es Fizz, Buzz o FizzBuzz
    
    //Primero verificamos si es divisible entre 3 y 5
 if(i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
 }
    //Luego verificamos si es divisible entre 3
    else if(i % 3 == 0) {
    console.log("Fizz");
    }
    //Luego verificamos si es divisible entre 5
    else if(i % 5 == 0) {
    console.log("Buzz");
    }
    //Si no es divisible entre ninguno, imprimimos el número
    else {
    console.log(i);
    }
}