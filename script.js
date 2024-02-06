/* Have to create variables linking JS to html elements*/
/* the variable below are within the global scope */
const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/* onclick the fucntion addTask() has been 
declared- function declaration */
function addTask(){
    if (inputBox.value === '') {
        alert("You need to write something!");
    }
    
    else{

        /* creating one HTML element with the tag name of li 
        which is being stored within li variable   */
        let li = document.createElement("li");

        /* We have to add the text to the li using the innerHTML property, 
        the text will be equal to what is placed in the inputBox */
        li.innerHTML = inputBox.value

        /* We need to display the li element created from the user input
        so using the append child propety we place it in the list container element */
        listContainer.appendChild(li);

        /* add a delete button (i.e cross) */
        let span =document.createElement("span");
        /* this is code for cross icon  */
        span.innerHTML = "\u00d7";

        /* need to display cross next to list item */
        li.appendChild(span)


    }

    /* The following will run once condtion is met */
    /* To clear input box once li element has been appended to the 
    list container  */
    inputBox.value =""
    saveData();
}

/* cross item need to delete the task  */

/* Added an event listener to the container where we have 
the tasks listed, in event of (DOM Event) "click" event depending on condition
 function will execute an action  */
listContainer.addEventListener("click", function(e){
    /* if list item including circle is clicked 
    it will toggle between states to show checked and line through text
    or without  */
if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
}

/* if this condition is met then the list element 
will be removed from the list */
else if (e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
}

/* Not sure about the purpose of this false state 
"The handler is executed in the bubbling phase."?*/
}, false)


/* Function to store tasks in browser so when closed/reopened 
or refreshed tasks are still on the list */
/* Can be added as a callback? */
function saveData(){
    //Whatever content is there will be saved in or browser
    localStorage.setItem("data", listContainer.innerHTML)
}

/* is localStorage a object that has methods? */

/* Fucntion to show when we open website again*/
 
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}
showTask();

