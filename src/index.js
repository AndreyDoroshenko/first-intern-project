// Подключение css
import './css/styles.css';
import * as print from './printTodo';
import * as store from './storeTodo';
import * as control from './todoController';

//  Удаление строки списка по нажатию кнопки
/*  const deleteLine = (id) => () => {
  const div = document.getElementById('list-' + id);
  div.remove();
  const deleted = todoList.findIndex((line) => line.id === id);
  todoList.splice(deleted, 1);
  saveTodoInLocalStorageTodoList();
}; */

//  Получение параметра из строки запросов в URL
function getUrlParameter(name) {
  name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Добавление обработчика для кнопки добавления строки в список
const addNewTodoButton = document.querySelector('.add-new-button');
addNewTodoButton.addEventListener('click', print.showQueryWindow);

const addTaskButton = document.querySelector('.query-window__button');
addTaskButton.addEventListener('click', control.addTodoItem);

//  Добавление обработчика для фильтра
const filter = document.querySelector('.filter');
filter.addEventListener('click', control.setFilterTo);

//  Получение стартового значения для фильтра
const activeFilterByQuery = getUrlParameter('filter') || 'All';
print.updateListByFilter(activeFilterByQuery);

const cancelQueryButton = document.querySelector('.query-background');
cancelQueryButton.addEventListener('click', print.cancelQueryWindow);

const t = print.showLoading(300);
store.getData('Andrey', '123').then(result => {
  console.log(Date.now());
  print.showTodo(result);
  clearTimeout(t);
  print.hideLoading();
});
