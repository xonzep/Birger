// let iAmGlobal = "someValue";


// if (true) {
//     var iAmLocal = "someMoreValue";
//     iAmGlobal = 'superman';
//     console.log(iAmGlobal);
//     console.log(iAmLocal);
// }

// console.log(iAmLocal);
// console.log(iAmGlobal);


//King's problem

let king = 'John';

if (true) {
    let king = 'Sam';

    if (true) {
        //let king = 'Mike';
        console.log(king);
    }
}

if (true) {
    console.log("I am second part " + king);
}