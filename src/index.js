// Подключение css
import './css/styles.css';

//  Создание строки списка
function createLine(id, lineText, isDone) {
  const div = document.createElement('div');
  div.id = 'list-' + id;
  const input = document.createElement('input');
  const text = document.createElement('div');
  const button = document.createElement('button');
  input.type = 'checkbox';
  input.checked = isDone || false;
  input.addEventListener('change', switchState(id));
  button.addEventListener('click', deleteLine(id));
  text.classList.add('list-line__text');
  button.classList.add('list-line__delete-button');
  text.innerText = lineText;
  button.innerText = 'X';
  if (input.checked === true) {
    div.classList.add('list-line');
    div.classList.add('list-line_completed');
    //  div.className = 'list-line ' + 'list-line_completed';
  } else {
    div.classList.add('list-line');
    div.classList.add('list-line_active');
    //  div.className = 'list-line ' + 'list-line_active';
  }
  div.appendChild(input);
  div.appendChild(text);
  div.appendChild(button);
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
const deleteLine = (id) => () => {
  const div = document.getElementById('list-' + id);
  div.remove();
  const deleted = todoList.findIndex((line) => line.id === id);
  todoList.splice(deleted, 1);
  updateData();
};

// Смена состояния строки списка
const switchState = (id) => () => {
  const edited = todoList.find((line) => line.id === id);
  if (edited) {
    edited.isDone = !edited.isDone;
    updateData();
  }
  const line = document.getElementById('list-' + id);
  const input = line.firstChild;
  if (input.checked === true) {
    line.className = 'list-line ' + 'list-line_completed';
  } else {
    line.className = 'list-line ' + 'list-line_active';
  }
};

//  Добавление новой строки списка
function addTodoItem() {
  const newTodo = document.querySelector('.new__input');
  if (newTodo.value.match(/\w+/)) {
    todoList.push({ id: (todoList.length + 1), text: newTodo.value, isDone: false });
    const elem = createLine(todoList.length, newTodo.value, false);
    updateData(false);
    list.appendChild(elem);
  }
  newTodo.value = '';
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
      list.className = 'list';
      break;
    }
    case 'Completed': {
      const list = document.querySelector('.list');
      list.className = 'list ' + 'list_completed';
      break;
    }
    case 'Active': {
      const list = document.querySelector('.list');
      list.className = 'list ' + 'list_active';
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
const addButton = document.querySelector('.new__button');
addButton.addEventListener('click', addTodoItem);

//  Добавление обработчика для фильтра
const filter = document.querySelector('.filter');
filter.addEventListener('click', setFilterTo);

//  Получение стартового значения для фильтра
const activeFilterByQuery = getUrlParameter('filter');
updateListByFilter(activeFilterByQuery);

// Заполнение списка данными из LocalStorage
const list = document.querySelector('.list');
const todoList = getData();
if (todoList) {
  todoList.forEach((line) => {
    const elem = createLine(line.id, line.text, line.isDone);
    list.appendChild(elem);
  });
}
