const formEl = document.querySelector(".form");

const inputEl = document.querySelector(".input");

const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

list.forEach(task=>{
    toDoList(task)
})

formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    toDoList();
});

function toDoList(task){
    let newWhatToDo = inputEl.value;
    if(task){
        newWhatToDo = task.name;
    }
   
    const liEl = document.createElement("li");
    if(task && task.checked){
        liEl.classList.add("checked");
    }
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

    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked")
        updateLocalStorage();
    });
    trashBtnEl.addEventListener("click", ()=>{
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    list = [];
    liEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
} 