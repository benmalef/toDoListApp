//Tasks for tommorow
// add evenetListenet to button(Enter)
// add tast to ToDo list
// add evenetListener to button(Delete)
// when click the text, should erase the tast -- toggle a class.

var buttons = document.querySelectorAll("button");
var ol = document.querySelector("ol");
var input = document.querySelector("input");
const maxInputLength = 30;

function createButtonforList() {
  const newButton = document.createElement("button");
  newButton.classList.add("btn", "btn-secondary", "btn-sm");
  newButton.textContent = "Delete";
  newButton.addEventListener("click", deleteListItem);
  return newButton;
}

function createDivForList() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("flex-grow-1", "ps-2", "pe-2");
  newDiv.textContent = input.value;
  newDiv.addEventListener("click", toggleDone);
  return newDiv;
}

function addTaskToDoList() {
  if (!checkInpuLength()) {
    return false;
  }
  const newListItem = document.createElement("li");
  newListItem.classList.add("list-group-item", "d-flex");

  const newDiv = createDivForList();
  const newButton = createButtonforList();

  newListItem.appendChild(newDiv);
  newListItem.appendChild(newButton);

  ol.appendChild(newListItem);
  input.value = "";
}

function deleteListItem(event) {
  event.target.parentElement.classList.add("animate__bounceOut");
  setTimeout(() => {
    event.target.parentElement.remove();
  }, "500"); // add animation
}

function inputTextItem() {
  return input.value;
}

function toggleDone(event) {
  event.target.classList.toggle("done");
}

function addListAfterKeypress(event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    event.preventDefault();
    addTaskToDoList();
  }
}

function checkInpuLength() {
  if (input.value.length < maxInputLength) return true;
}

function addEventListenersToElements() {
  buttons[0].addEventListener("click", addTaskToDoList); // enter Button
  input.addEventListener("keypress", addListAfterKeypress);
}

addEventListenersToElements();
