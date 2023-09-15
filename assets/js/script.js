// Selecting elements from the HTML
const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

// Retrieve the list of tasks from local storage or initialize an empty array
let list = JSON.parse(localStorage.getItem("list"));

// Iterate through the list of tasks and add them to the UI
list.forEach(task=>{
    toDoList(task)
})

// Add a submit event listener to the form element
formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    toDoList();
});

// Define the toDoList function for adding and rendering tasks
function toDoList(task){
    let newWhatToDo = inputEl.value;

    // If a task object is provided, use its name instead of the input field value
    if(task){
        newWhatToDo = task.name;
    }
   // Create a new list item (li) element
    const liEl = document.createElement("li");
    // Add the "checked" class to the list item if the task is checked
    if(task && task.checked){
        liEl.classList.add("checked");
    }
    // Set the text content of the list item to the task description
    liEl.innerText = newWhatToDo;

    // Append the list item to the unordered list
    ulEl.appendChild(liEl);

     // Clear the input field
    inputEl.value = ""

    // Create a check button element and add it to the list item
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
    <i class="fa-sharp fa-solid fa-circle-check">
    `;
    liEl.appendChild(checkBtnEl);

    // Create a trash button element and add it to the list item
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `
    <i class="fa-solid fa-trash">
    `;
    liEl.appendChild(trashBtnEl);

    // Add a click event listener to the check button to toggle the "checked" class and update local storage
    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked")
        updateLocalStorage();
    });

    // Add a click event listener to the check button to toggle the "checked" class and update local storage
    trashBtnEl.addEventListener("click", ()=>{
        liEl.remove();
        updateLocalStorage();
    });
    // Update local storage with the current list of tasks
    updateLocalStorage();
}

// Define the updateLocalStorage function to store the list of tasks in local storage
function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    list = [];
    // Iterate through the list items and create a task object for each
    liEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    });
    
    // Store the list of tasks in local storage as JSON
    localStorage.setItem("list", JSON.stringify(list));
} 