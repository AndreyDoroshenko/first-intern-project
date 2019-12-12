import { updateListByFilter, showTodo, showLoading, hideLoading } from './printTodo';
import { getData, saveTask, updateTask } from './storeTodo';

const switchState = (id) => () => {
  showLoading();
  const line = document.getElementById('list-' + id);
  const input = line.lastChild.firstChild;
  if (input.checked === true) {
    line.className = 'list-line ' + 'list-line_completed';
  } else {
    line.className = 'list-line ' + 'list-line_active';
  }
  updateTask('Andrey', id).then(result => {
    if (result.message) {
      console.log(result.message);
    }
    hideLoading();
  });
};

function addTodoItem() {
  showLoading();
  const newTodo = document.querySelector('.query-window__input');
  if (newTodo.value.match(/\w+/g)) {
    const windowShading = document.querySelector('.query');
    windowShading.classList.remove('query_active');
    windowShading.classList.add('query_disabled');
    newTodo.value = '';
  }
  return saveTask('Andrey', newTodo.value).then(result => {
    if (result.message) {
      console.log(result.message);
    }
    getData('Andrey', '123')
      .then(result => {
        showTodo(result);
      });
  },
  );
}

function setFilterTo(e) {
  const activeFilter = e.target.name;
  updateListByFilter(activeFilter);
}

export { switchState, addTodoItem, setFilterTo };
