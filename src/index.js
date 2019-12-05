// Подключение css
import './css/styles.css';

//  Создание строки списка
function createLine(id, lineText, isDone) {
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
  if (input.checked === true) {
    div.classList.add('list-line');
    div.classList.add('list-line_completed');
  } else {
    div.classList.add('list-line');
    div.classList.add('list-line_active');
  }
  label.appendChild(input);
  label.appendChild(snap);
  div.appendChild(text);
  div.appendChild(label);
  //  div.appendChild(button);
  return div;
}

//  Обновление LocalStorage
function updateData() {
  const serialObj = JSON.stringify(todoList);
  window.localStorage.setItem('List', serialObj);
}

// Получение данных из LocalStorage
function getData() {
  return JSON.parse(window.localStorage.getItem('List')) || [];
}

//  Удаление строки списка по нажатию кнопки
/*  const deleteLine = (id) => () => {
  const div = document.getElementById('list-' + id);
  div.remove();
  const deleted = todoList.findIndex((line) => line.id === id);
  todoList.splice(deleted, 1);
  updateData();
}; */

// Смена состояния строки списка
const switchState = (id) => () => {
  const edited = todoList.find((line) => line.id === id);
  if (edited) {
    edited.isDone = !edited.isDone;
    updateData();
  }
  const line = document.getElementById('list-' + id);
  const input = line.lastChild.firstChild;
  if (input.checked === true) {
    line.className = 'list-line ' + 'list-line_completed';
  } else {
    line.className = 'list-line ' + 'list-line_active';
  }
};

//  Добавление новой строки списка
function addTodoItem() {
  const newTodo = document.querySelector('.query-window__input');
  if (newTodo.value.match(/\w+/g)) {
    todoList.push({ id: (todoList[0] ? todoList[todoList.length - 1].id + 1 : 1), text: newTodo.value, isDone: false });
    const elem = createLine(todoList.length, newTodo.value, false);
    updateData(false);
    list.appendChild(elem);
  }
  const window = document.querySelector('.query');
  window.classList.remove('query_active');
  window.classList.add('query_disabled');
  newTodo.value = '';
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

//  Установка фильтра на новое значение
function setFilterTo(e) {
  const activeFilter = e.target.name;
  updateListByFilter(activeFilter);
}

//  Обновление списка в соответствии с установленым в фильтре значением
function updateListByFilter(filter) {
  switch (filter) {
    case 'All': {
      const list = document.querySelector('.list');
      const header = document.querySelector('h1');
      header.innerHTML = filter + ' tasks';
      list.className = 'list';
      break;
    }
    case 'Completed': {
      const list = document.querySelector('.list');
      const header = document.querySelector('h1');
      header.innerHTML = filter + ' tasks';
      list.classList.add('list');
      list.classList.add('list_completed');
      break;
    }
    case 'Active': {
      const list = document.querySelector('.list');
      const header = document.querySelector('h1');
      header.innerHTML = filter + ' tasks';
      list.classList.add('list');
      list.classList.add('list_active');
      break;
    }
  }
}

//  Получение параметра из строки запросов в URL
function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Добавление обработчика для кнопки добавления строки в список
const addNewTodoButton = document.querySelector('.add-new-button');
addNewTodoButton.addEventListener('click', showQueryWindow);

const addTaskButton = document.querySelector('.query-window__button');
addTaskButton.addEventListener('click', addTodoItem);

//  Добавление обработчика для фильтра
const filter = document.querySelector('.filter');
filter.addEventListener('click', setFilterTo);

//  Получение стартового значения для фильтра
const activeFilterByQuery = getUrlParameter('filter') || 'All';
updateListByFilter(activeFilterByQuery);

const cancelQueryButton = document.querySelector('.query-background');
cancelQueryButton.addEventListener('click', cancelQueryWindow);

// Заполнение списка данными из LocalStorage
const list = document.querySelector('.list');
const todoList = getData();

if (todoList) {
  todoList.forEach((line) => {
    const elem = createLine(line.id, line.text, line.isDone);
    list.appendChild(elem);
  });
}
