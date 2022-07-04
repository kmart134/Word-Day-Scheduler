//set variables
var NowMoment = moment(); 

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
    var userInput10= (localStorage.getItem("user-input10"))
    var userInput11= (localStorage.getItem("user-input11"))
    var userInput12= (localStorage.getItem("user-input12"))
    var userInput13= (localStorage.getItem("user-input13"))
    var userInput14= (localStorage.getItem("user-input14"))
    var userInput15= (localStorage.getItem("user-input15"))
    var userInput16= (localStorage.getItem("user-input16"))
    var userInput17= (localStorage.getItem("user-input17"))
    
    $("#9").val(userInput9)
    $("#10").val(userInput10)
    $("#11").val(userInput11)
    $("#12").val(userInput12)
    $("#13").val(userInput13)
    $("#14").val(userInput14)
    $("#15").val(userInput15)
    $("#16").val(userInput16)
    $("#17").val(userInput17)


}
//call function
loadEvents();









