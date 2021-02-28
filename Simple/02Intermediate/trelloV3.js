let myTodo = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(){
        console.log(this);
    }
}

myTodo.addMeeting();