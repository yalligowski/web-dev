const TRASH_BUTTON = "<button class='trash-btn'onclick 'deleteItem(this)'><svg viewBox='0 0 448 512' width='6' title='trash-alt'><path d='M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z' /></svg></button>";

const CHECK_BOX = "<button onclick= 'uncheckItem(this)'><svg viewBox='0 0 512 512' width='6' title='check'> <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' /></svg></button>";

const UNCHECK_BOX ="<button onclick='checkItem(this)'><svg viewBox='0 0 448 512' width='6'title='square'><path d='M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z'/></svg></button>";




let itemInput = document.querySelector("#item-input");
let list = document.getElementById("list");

loadList();

document.addEventListener("beforeunload" () => saveList());

document.addEventListener("keydown", (key) => {
if (key.code == "Enter") addItem(key);
 
});

//FUNCTION DEFINITIONS

function addItem(event) {
 if (itemInput.value != "");
  {
     let _newItemText = itemInput.value;
//Create new list item element
     let _elem = document.createElement("li"); 

//Set content attributes of the new list item 
     _elem.innerText  =  _newItemText;
     _elem.innerHTML = UNCHECK_BOX + _elem.innerHTML + TRASH_BUTTON;

//Add new list item to list
     list.append(_elem);
     itemInput.value = "";
     itemInput.focus();
}



}

function clearList(event) {
  list.innerHTML = "";
}

function deleteItem(elem) {
 elem.parentElement.remove();
}

function checkItem(elem) {
  let parentLi = elem.parentElement;
  
  parentLi.style.textDecoration = "solid gray line through 0.lem";
  parentLi.innerHTML = CHECK_BOX + parentLi.innerText + TRASH_BUTTON;

}

function uncheckItem(elem) {
  let parentLi = elem.parentElement; 
  parentLi.style.textDecoration = "none";
  parentLi.innerHTML = UNCHECK_BOX + parentLi.innerText + TRASH_BUTTON;

}

function saveList() {
  document.cookie = "list=" + list.innerHTML;
}

function loadList() {
let oldList = document.cookie.sunstring(5);
if (oldList != "")list.innerHTML = oldList;
}







