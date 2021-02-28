let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,
}

function addMeeting(todo, meet = 0){
    todo.meetings = todo.meetings + meet;
}

function meetDone(todo, meet = 0){
    todo.meetDone = todo.meetDone - meet;
}

function resetDay(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}

function getSummaryDay(todo){
    let meetLeft = todo.meetings + todo.meetDone
    return `You have ${meetLeft} meetings today!`
}

addMeeting(myTodo, 4);
addMeeting(myTodo, 2);
meetDone(myTodo, 5);

console.log(getSummaryDay(myTodo));