import { switchState } from './todoController';

function createLine(id, lineText, isDone) { // uncomment line if you want to add delete button
  const div = document.createElement('div');
  div.id = 'list-' + id;
  const input = document.createElement('input');
  const label = document.createElement('label');
  const snap = document.createElement('snap');
  const text = document.createElement('div');
  //  const button = document.createElement('button');
  input.type = 'checkbox';
  input.id = 'checkbox';
  input.classList.add('list-line__checkbox__check-mark');
  input.checked = isDone || false;
  snap.classList.add('list-line__checkbox__image');
  input.addEventListener('change', switchState(id));
  label.classList.add('list-line__checkbox');
  //  button.addEventListener('click', deleteLine(id));
  text.classList.add('list-line__text');
  //  button.classList.add('list-line__delete-button');
  text.innerText = lineText;
  //  button.innerText = '\u274C';
  div.className = 'list-line list-line_' + ((input.checked) ? 'completed' : 'active');
  label.appendChild(input);
  label.appendChild(snap);
  div.appendChild(text);
  div.appendChild(label);
  //  div.appendChild(button);
  return div;
}

function showTodo(list) {
  const todoList = document.querySelector('.list');
  todoList.innerHTML = '';
  if (list) {
    list.forEach(line => {
      const listLine = createLine(line._id || line.id, line.text, line.isDone);
      todoList.appendChild(listLine);
    });
  }
}

function updateListByFilter(filter) {
  const list = document.querySelector('.list');
  const header = document.querySelector('h1');
  header.innerHTML = filter + ' tasks';
  list.className = `list list_${filter.toLowerCase()}`;
}

function showQueryWindow() {
  const window = document.querySelector('.query');
  window.classList.remove('query_disabled');
  window.classList.add('query_active');
}

function cancelQueryWindow() {
  const background = document.querySelector('.query');
  background.classList.remove('query_active');
  background.classList.add('query_disabled');
}

function showLoading(delay) {
  console.log(Date.now());
  return window.setTimeout(() => {
    console.log('show loading');
    const loadingScreen = document.querySelector('.loading');
    loadingScreen.classList.remove('loading_disabled');
  }, delay);
}

function hideLoading(dateOfRequest, timeoutDelayEnd, timeoutID) {
  console.log(dateOfRequest > timeoutDelayEnd);
  if (dateOfRequest > timeoutDelayEnd) {
    window.setTimeout(() => {
      console.log('hide loading after 0.2sec');
      const loadingScreen = document.querySelector('.loading');
      loadingScreen.classList.add('loading_disabled');
    }, 200);
  } else {
    console.log('loading spinner canceled');
    clearTimeout(timeoutID);
  }
}

export { showTodo, updateListByFilter, showQueryWindow, cancelQueryWindow, showLoading, hideLoading };
