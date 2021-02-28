// Grade problem
// students marks
// 10 - Amazing
// 5 - Good
// 3 - Poor
// 0 - fail


//Create a list of students to play with
const names = "Michael Christopher Jessica Matthew Ashley Jennifer Joshua Amanda Daniel David James Robert John Joseph Andrew Ryan Brandon Jason Justin Sarah William Jonathan Stephanie Brian Nicole Nicholas Anthony Heather Eric Elizabeth Adam Megan Melissa Kevin Steven Thomas Timothy Christina Kyle Rachel Laura Lauren Amber Brittany Danielle Richard Kimberly Jeffrey Amy Crystal Michelle Tiffany Jeremy Benjamin Mark Emily Aaron Charles Rebecca Jacob Stephen Patrick Sean Erin Zachary Jamie Kelly Samantha Nathan Sara Dustin Paul Angela Tyler Scott Katherine Andrea Gregory Erica Mary Travis Lisa Kenneth Bryan Lindsey Kristen Jose Alexander Jesse Katie Lindsay Shannon Vanessa Courtney Christine Alicia Cody Allison Bradley Samuel Shawn April Derek Kathryn Kristin Chad Jenna Tara Maria Krystal Jared Anna Edward Julie Peter Holly Marcus Kristina Natalie Jordan Victoria Jacqueline Corey Keith Monica Juan Donald Cassandra Meghan Joel Shane Phillip Patricia Brett Ronald Catherine George Antonio Cynthia Stacy Kathleen Raymond Carlos Brandi Douglas Nathaniel Ian Craig Brandy Alex Valerie Veronica Cory Whitney Gary Derrick Philip Luis Diana Chelsea Leslie Caitlin Leah Natasha Erika Casey Latoya Erik Dana Victor Brent Dominique Frank Brittney Evan Gabriel Julia Candice Karen Melanie Adrian Stacey";

//Create an array from the above var and split it by space 
let studentNameArray = names.split(' ');

//Create function to figure out grades and assign them to a rating
function assignGrade( mark = 0) {
    if (mark <= 3 && mark > 0) {
        return "Poor";
    }
    else if(mark == 0){
        return "Fail";
    }
    else if (mark >=4 && mark < 10){
        return "Good";
    }
    else if (mark == 10 ){
        return "Amazing";
    }
}

//Function to loop through our student names and assign a score to them as well as a rating. Why is it's a function? Dunno.
function returnName() {
    for (let i = 0; i < studentNameArray.length; i++) {
        let gradeNumber = [Math.floor(Math.random() * 11)];
        //gradeNumber[i]
        console.log(studentNameArray[i] + " got a score of " + gradeNumber + " Which is: " + assignGrade(gradeNumber));
        }
}

//Print it all out
returnName()