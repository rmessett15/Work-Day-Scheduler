// Adds current date to be rendered in the header of the html
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Grabs all save button elements on the html so they can be manipulated in the DOM
var buttonEl = document.getElementsByClassName("saveBtn");

// Add event listener ("click") to the save button element which iterates over each time slot
for (var i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", saveToDoToLocalStorage);
}

// Selects the span tag element on the html so it can be manipulated in the DOM
var messageSaved = document.getElementById("messageSaved");

// Function which allows user data to be saved to local storage
function saveToDoToLocalStorage(event) {
  var toDo = this.previousSibling.previousSibling.value;
  var parentId = this.parentElement.id;
  console.log(parentId);
  localStorage.setItem(parentId, toDo);

  // Message displayed via span tag when save button is clicked
  messageSaved.textContent = "Your event has been saved to local storage ✅";
}

// Refactored with JavaScript (JQUERY DRAFTS BELOW)
// This variable displays the current hour using a number
var currentHour = dayjs().hour();
// Grabs the class of time-block elements so they can be manipulated in the DOM
var timeBlocks = document.getElementsByClassName("time-block");

// Iterates over the time-block class and compares the current hour to the block hour with the if statement and gives rise to the color attributes the user sees delineating past, present, & future time
for (var i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  // Grabs local storage data and appends any stored data to the page on re-load
  var parentId = timeBlocks[i].getAttribute("id");
  var textValue = localStorage.getItem(parentId);
  timeBlocks[i].children[1].value = textValue;

  // Adds the focus event listener to save button element so when user saves an event they receive a message letting them know their event has been saved
  timeBlocks[i].children[1].addEventListener("focus", function () {
    messageSaved.textContent = "";
  });

  // Splits the "hour" at the dash and converts the string leftover to a number so it can be compared to the current hour given by the currentHour variable
  var blockHour = parseInt(timeBlock.id.split("-")[1]);
  console.log(blockHour);

  // Conditional statement which gives rise to the color attributes the user sees delineating past, present, & future time
  if (blockHour < currentHour) {
    timeBlock.classList.add("past");
    timeBlock.classList.remove("present");
    timeBlock.classList.remove("future");
  } else if (blockHour === currentHour) {
    timeBlock.classList.add("present");
    timeBlock.classList.remove("past");
    timeBlock.classList.remove("future");
  } else {
    timeBlock.classList.add("future");
    timeBlock.classList.remove("past");
    timeBlock.classList.remove("present");
  }
}

// Code below is a reference to how one would re-write lines 29-64 using JQUERY

// Adds past, present, future class to each time block by comparing the id to the current hour using dayjs().hour(). (JQUERY DRAFT 1)
// REFACTOR INTO JAVASCRIPT!!!!
// var currentHour = dayjs().hour();
// $(".time-block").each(function() {
//   var blockHour = parseInt($(this).attr("id").split("-")[1]);
//   console.log(blockHour)
//     console.log($(this).attr("id"));

//     if (blockHour < currentHour) {
//       $(this).addClass("past").removeClass("present future");
//     } else if (blockHour === currentHour) {
//       $(this).addClass("present").removeClass("past future");
//     } else {
//       $(this).addClass("future").removeClass("past present");
//     }
// })

// Refactored with JQuery (JQUERY DRAFT 2 -> code from JQUERY DRAFT 1 refactored)
// var currentHour = dayjs().hour();
// var timeBlocks = $(".time-block");

// for(var i = 0; i < timeBlocks.length; i++) {
//   var timeBlock = $(timeBlocks[i]);
//   console.log(timeBlock);
//   var blockHour = parseInt(timeBlock.attr("id").split("-")[1]);

//   if (blockHour < currentHour) {
//     timeBlock.addClass("past");
//     timeBlock.removeClass("present");
//     timeBlock.removeClass("future");
//   } else if (blockHour === currentHour) {
//     timeBlock.addClass("present");
//     timeBlock.removeClass("past");
//     timeBlock.removeClass("future");
//   } else {
//     timeBlock.addClass("future");
//     timeBlock.removeClass("past");
//     timeBlock.removeClass("present");
//   }
// }
