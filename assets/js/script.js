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

for (let i = 1; i<=100; i++) {
    console.log(i);

    //Stamp Fizz for multiples of 3
    if (i % 3 ===0) {
        console.log(i, 'Fizz');
        
    } 
//Stamp Buzz for multiples of 5

//Stamp FizzBuzz for multiples of 3 and 5
}