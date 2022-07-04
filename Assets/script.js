//set variables
var NowMoment = moment(); 
var nowHour = moment().format('LT');
var time= document.querySelector(".hour");

var currentDay = document.getElementById('currentDay'); 
var textArea = document.getElementById("textarea");
// var userInput= document.querySelector(".col-10");
var container = document.querySelector(".container")
var text;


//curret day and weekday on top of page - moment.js
currentDay.innerHTML = NowMoment.format('dddd')+"   " + NowMoment.format('MMM Do YY'); 


//save user input into local storage

$(".save").click(function() {
var text= $(this).siblings("textarea")[0].value
var id= $(this).siblings("textarea")[0].id
console.log(text)
localStorage.setItem("user-input"+id, text)

})

//get previously saved values and display
function loadEvents () {
    var userInput9= (localStorage.getItem("user-input9"))

    $("#9").val(userInput9)


}

loadEvents();








//functionality: changing background color based on time of day
//compare current time of day with time  in each block
//use moment.js
//set up a variable that is equal to the time of day (using monet and compare it to each time block.
//use a loop with  with (if statement) to compare the variable with the time
//if block's time <current variable -change color to green
//else block'stime = current variable - change colro to red
// else set to green


