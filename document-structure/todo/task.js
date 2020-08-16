'use strict';

let list = document.getElementById('tasks__list');
let button = document.getElementById('tasks__add');

function addTask(e) {
  e.preventDefault();
  let input = document.getElementById('task__input');
  let task = input.value;
  if (task) {
    let div = document.createElement('div');
    div.className = 'task';
    div.innerHTML = `<div class="task__title">${task}</div>
    <a href="#" class="task__remove">&times;</a>`;
    list.appendChild(div);

  function removeTask() {
      this.closest('.task').remove();
      return false;
    }

    let removeButton = div.getElementsByClassName('task__remove')[0];
    removeButton.addEventListener('click', removeTask);

  input.value = '';
  }
}

button.addEventListener('click', addTask);
