console.log('It Works');

/* 
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Tools:
-const/let
-for
-if/else if/else
-relational operator <=

*/


/*Create a loop to stamp numbers from 1 to 100 */

for (let i = 1; i <= 100; i++) {
    

    //Stamp FizzBuzz for multiples of 3 and 5
    if (i % 3 === 0 && i % 5 === 0){
        console.log(i, 'FizzBuzz');
        
    } else if (i % 5 === 0) {
        //Stamp Buzz for multiples of 5
        console.log(i, 'Buzz');
        
    }else if (i % 3 === 0) {
        //Stamp Fizz for multiples of 3
        console.log(i, 'Fizz');
    } else {
        console.log(i);
    }
}