//set variables

var textArea = document.getElementById("textarea");
var userInput= document.getElementById("textarea").value;
var saveButton = document.querySelector(".save");

var NowMoment = moment(); 
var currentDay = document.getElementById('currentDay'); 


//add curret day and weekday on top of page - moment.js
currentDay.innerHTML = NowMoment.format('dddd')+"   " + NowMoment.format('MMM Do YY'); 



// listen for button click on save button. Store text to localStorage
saveButton.addEventListener("click", function(){
    console.log("clicked save")
    //only works  for 9am

    localStorage.setItem("userInput", userInput);
    //second userInput is not being stored in Local Storage
});


// (html provide ID to text area)grab value from associated text area


// Save value local to storage


//Getting previous saved values ,  (getItem)
//give associated textarea the value retrived from local storage





//functionality: changing background color based on time of day
//compare current time of day with time  in each block
//use moment.js
//set up a variable that is equal to the time of day (using monet and compare it to each time block.
//use a loop with  with (if statement) to compare the variable with the time
//if block's time <current variable -change color to green
//else block'stime = current variable - change colro to red
// else set to green

