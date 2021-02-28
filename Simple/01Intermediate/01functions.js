// let sayHello = function(name, age) {
//     console.log(`Greeting message for ${name}:`);
//     console.log(`Hey ${name}`);
// }

// sayHello('John');

// let fullNameMaker = function(firstname, lastname){
//     console.log('Welcome to LCO');
//     console.log(`Happy to have you, ${firstname} ${lastname}`)
// }

// fullNameMaker('John', 'Doe');

// let myAdder = function(num1, num2) {
//     let added = num1 + num2;
//     return added;
// }

// let result = myAdder(2, 5);
// console.log(result);

function myMulti(num1, num2) {
    return num1 * num2;
    
}

console.log(myMulti(2, 7));

function guestUser(name = 'unnamed', courseCount = 0) {
    return 'Hello ' + name + ' and your course count is ' + courseCount;
}

console.log(guestUser('John', 22)); 