// ESERCIZI PER IL WEEK END PER ESERCITARVI 

// ESERCIZIO 1 : 
// Scrivi un programma che chieda all’utente di inserire un numero intero. Questo numero deve essere usato per creare una lista di numeri che vanno da 1 a N. 
// Per ogni numero della lista, il programma deve stampare se è pari o dispari.
// esempio: 
// 1 è dispari  
// 2 è pari  
// 3 è dispari  
// 4 è pari   ecc ecc

// ESERCIZIO 2 :
// Scrivi un programma che: chieda all’utente di inserire un numero intero N. Stampi tutti i numeri da 1 a N.
// Per ogni numero, segnali se si tratta di un multiplo di 3 con un messaggio speciale (ad esempio: “è multiplo di 3”)

// ESERCIZIO 3 :
//  Simulate una sala giochi , dove 2 utenti si devono sfidare ad una sfida di dadi , alla fine dovere decretare il vincitore della sfida oppure se la sfida finisce in parita'.


// Esercizio 1

// let number=prompt("Inserisci un numero intero");

// for(let number=1; number<=20; number++){

//  if(number % 2 === 0){
//     console.log(` Questo ${number} è pari`);
//  } else {
//     console.log (`Questo ${number} è dispari`);
//  }  
// }


// Esercizio 2
// let number=prompt("Inserisci un numero intero");

// for(let number=1; number<=20; number++){
//     if(number % 3 === 0){
//         console.log(`Questo ${number} è multiplo di 3`);
//     }else{
//         console.log(`Questo ${number} non è multiplo di 3`);
// }
// }

// Esercizio 3

// let player1=0;
// let player2=0;
// let tiri=5;

// for(let i=1; i<=tiri; i++){
//     let dado= Math.floor(Math.random()*(6-1+1)+1);
//     total=player1 + dado;
//     console.log(`Player1 ha lanciato numero ${dado}`);
// }
// for(let x=1; x<=tiri; x++){
//     let dado1= Math.floor(Math.random()*(6-1+1)+1);
//     total1=player2 + dado1;
//     console.log(`Player2 ha lanciato numero ${dado1}`);
// }
// if(total == total1){
//     console.log(`La partita finisce in parità`)
//     }else if(total > total1){
//         console.log(`Player 1 ha vinto finalizzando totale punti ${total}`)
//     }else if(total < total1){
//         console.log(`Player 2 ha vinto finalizzando totale punti ${total1}`)
//     }

// ESERCIZIO DA COLLOQUIO TECNICO :
// Scrivere un programma che permetta di stampare in console tutti i numeri da 1 a N: - N dovra’ rappresentare il parametro massimo - tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz', - tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'- e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'

// Metodo 1
// for(let num=1; num<=50; num++){
//     if(num % 3 === 0 && num % 5 != 0 && num % 15 != 0){
//         console.log("Fizz");
//     }else if(num %5 === 0 && num %3 !=0 && num % 15 !=0){
//         console.log("Buzz");
//     }else if(num %15 === 0 && num %3 === 0 && num %5 === 0){
//         console.log("fizzBuzz");
//     }else{
//             console.log(num);
    
//     }
// }
// Metodo 2
for(let num=1; num<=50; num++){
    if(num % 15 === 0){
        console.log("fizzBuzz");
    }else if(num % 5 === 0){
        console.log("Buzz");
    }else if(num % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(num);
    }
}