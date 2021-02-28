// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];


// //console.log(days[0]);

// days.forEach(function(day, index){
//     console.log(`starts with ${index+1} -- ${day}`);
// })

// //Loop through months
// const months = ['Jan', 'Feb', 'Mar', 'Api', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// months.forEach(function(month, index){
//     console.log (`${month}  ${index+1}`);
// })



// for (let i = days.length - 1; i >= 0; i--) {
//     console.log(days[i]);
// }


const myToDo = [];

myToDo.unshift('Buy Bread');
myToDo.unshift('Record Videos for Youtube');
myToDo.unshift('Go to Gym');
myToDo.unshift('Program');

for (let i = 0; i < myToDo.length; i++) {
    console.log(`Your task no. ${i+1} is: ${myToDo[i]}`);
}
