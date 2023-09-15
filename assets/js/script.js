const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    toDoList();
});

function toDoList(){
    let newWhatToDo = inputEl.value;
    const liEl = document.createElement("li");
    liEl.innerText = newWhatToDo;
    ulEl.appendChild(liEl);
    inputEl.value = ""
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `
    <i class="fa-sharp fa-solid fa-circle-check">
    `;
    liEl.appendChild(checkBtnEl);
    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `
    <i class="fa-solid fa-trash">
    `;
    liEl.appendChild(trashBtnEl);
}