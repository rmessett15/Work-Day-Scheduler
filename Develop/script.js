// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

// Adds current date to be rendered in the header of the html
// Re write using JavaScript
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Adds event listener to save button and saves to local storage.
// var inputToDo = document.getElementsByClassName("description");
// var buttonEl = document.getElementsByClassName("saveBtn");
// buttonEl.addEventListener("click", saveToDoToLocalStorage());

// function saveToDoToLocalStorage() {
//   var toDo = inputToDo.value;
//   localStorage.setItem("task", toDo);
// }

// Add event listener ("click") to the save button element which iterates over each time slot
// var inputToDo = document.getElementById("hour-9");
var buttonEl = document.getElementsByClassName("saveBtn");
// maybe use event delegation???
// Re write this code in JQuery!!!
for(var i = 0; i < buttonEl.length; i++) {
  buttonEl[i].addEventListener("click", saveToDoToLocalStorage);
}

// buttonEl.addEventListener("click", saveToDoToLocalStorage());

// Added prevent default method so the data persists on page reload. Not sure if I need this or if I should just be appending the locally stored data to the page on page load. Or both????
// event.preventDefault();

// Save to local storage
// Maybe use event delegation & event propagation (event bubbling) instead of event.target.previousSibling or parentElement???

var messageSaved = document.getElementById("messageSaved");

function saveToDoToLocalStorage(event) {
  var toDo = this.previousSibling.previousSibling.value;
  var parentId = this.parentElement.id;
  console.log(parentId);
  localStorage.setItem(parentId, toDo);
  
  messageSaved.textContent = "Your message has been saved to local storage";
}



// Adds past, present, future class to each time block by comparing the id to the current hour using dayjs().hour().
// REFACTOR INTO JAVASCRIPT!!!! --> chat GPT
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


// Refactored with JQuery
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

// Final!!! Refactored with JavaScript
var currentHour = dayjs().hour();
var timeBlocks = document.getElementsByClassName("time-block");

for (var i = 0; i < timeBlocks.length; i++) {
  var timeBlock = timeBlocks[i];
  var parentId = timeBlocks[i].getAttribute("id");
  var textValue = localStorage.getItem(parentId);
  timeBlocks[i].children[1].value = textValue;
  
  timeBlocks[i].children[1].addEventListener("focus", function() {
    messageSaved.textContent = "";
  })
  var blockHour = parseInt(timeBlock.id.split("-")[1]);
  console.log(blockHour);
  
  // &&
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





// Code block to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
// Add iteration to gather all elements in storage
// var description = document.querySelector(".description");
// var blockHour = parseInt(timeBlock.id.split("-")[1]);

// Change this so Im using getItem(grab all IDs).valueOf()
// var retrieveLocalStorageData = localStorage.getItem("hour-9").valueOf();
// console.log(retrieveLocalStorageData);
// description.textContent = retrieveLocalStorageData;

// ?????? maybe iterate over the text content which is the child of the id within each block hour div ********START HERE TOMORROW
// for(var i = 0; i < localStorage.length; i++) {
//   console.log(localStorage.getItem(localStorage.key(i)));
//   console.log(localStorage.key(i));
// }




// ??????
// function appendItemsFromLocalStorage(event) {
//   var toDo = event.target.previousSibling.previousSibling.value;
//   var hour = event.target.parentElement.id;
//   retrieveLocalStorageData;
// }



// add prompt to show todos were saved to local storage





