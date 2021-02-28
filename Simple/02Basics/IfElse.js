// if (5 < 8) {
//     console.log ('inside IF block');
//     console.log('still here');
// }
// else if (true){
//     console.log ('Inside if else');
// }
// else{
//     console.log ('inside Else');
// }

// var whoIsHere = 'user';

// if (whoIsHere == 'user') {
//     console.log('Greeting message for user');
//     console.log('Allow access to view all courses');
// } else if (whoIsHere == 'teacher') {
//     console.log('Greeting message for teacher');
//     console.log('Allow access to their courses');
// } else {
//     console.log('MESSAGE: Please verify your email');
//     console.log('Send user an email for verification');
// }


// Grade problem
// students marks
// 10 - Amazing
// 5 - Good
// 3 - Poor
// 0 - fail

//Define 'grade' var
let grade = 5;
//Define 'mark' var which will hold the list answer from the IF
let mark = 'N/A';
//Create the array for holding the marks
let studentMarks = ['Amazing', 'Good', 'Poor', 'Fail'];

//we need to check for numbers outside of the range and round them up or down accordingly. This is shit and can be done better...I just don't know how and it would
//be better if I could say if 7 and up go ten and 6 go 5. I could, but it's just more else ifs which meh.

if (grade > 5){
    grade = 10;
}else if (grade > 10){
    grade = 10;
}else if (grade > 3){
    grade = 5;
}else if(grade > 0){
    grade = 3;
}else{
    grade = 0;
}

//cycle through until we hit the grade and set mark to corrsponding list item. Could probably get away with setting the grade here using If =>
//instead of doing that stupid IF ELSE up above. But not really. I need the numbers to be exact to assign an item. Hmm.

if (grade == 0) {
    mark = studentMarks[3];
}else if ( grade == 3){
    mark = studentMarks[2];
}else if (grade == 5){
    mark = studentMarks[1];
}else if (grade == 10){
    mark = studentMarks[0];
}else{
    mark = 'N/A';
}
//define the var for console print out using the previous vars. Not sure why it has to go here since we don't call it until the end. Get error otherwise.
//I guess it could be because we're storing the data right away above so it doesn't change?
let yourGrade = 'Your grade is ' + grade + ' which is ' + mark + '.';

// Print out what we got
console.log(yourGrade);
