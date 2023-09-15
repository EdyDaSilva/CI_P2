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

    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked")
    });
    trashBtnEl.addEventListener("click", ()=>{
        liEl.remove();
    });
    updateLocalStorage();
}

function updateLocalStorage(){
    const liEls = document.querySelectorAll("li");
    let list = [];
    liEls.forEach(liEl=>{
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
} 