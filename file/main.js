const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addList() {
    if(inputBox.value === '') {
        alert("Add something here");
    } else {
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = '';
    savaData();
}

function savaData() {
    localStorage.setItem('data', listContainer.innerHTML);
}
function toggleListItem(li) {
    li.classList.toggle("checked");
    savaData();
}
function removeListItem(li) {
    li.remove();
    savaData();
}
listContainer.addEventListener('click', (e) => {
    const target = e.target;
    if(target.tagName === "LI") {
        toggleListItem(target);
    } else {
        removeListItem(target.parentElement);
    }
});
function loadData() {
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();







































