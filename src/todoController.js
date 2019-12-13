import { updateListByFilter, showTodo, showLoading, hideLoading } from './printTodo';
import { getData, saveTask, updateTask } from './storeTodo';

const switchState = (id) => () => {
  // showLoading();
  const t = showLoading(200);
  const line = document.getElementById('list-' + id);
  const input = line.lastChild.firstChild;
  line.className = 'list-line list-line_' + ((input.checked) ? 'completed' : 'active');
  // if (input.checked) { // remake in 1 line
  //   line.className = 'list-line ' + 'list-line_completed';
  // } else {
  //   line.className = 'list-line ' + 'list-line_active';
  // }
  updateTask('Andrey', id).then(result => {
    if (result.message) {
      console.log(result.message);
    }
    clearTimeout(t);
    hideLoading();
  });
};

function addTodoItem() {
  const t = showLoading(200);
  const newTodo = document.querySelector('.query-window__input');
  if (newTodo.value.match(/\w+/g)) {
    const windowShading = document.querySelector('.query');
    windowShading.classList.remove('query_active');
    windowShading.classList.add('query_disabled');
    saveTask('Andrey', newTodo.value).then(result => {
      if (result.message) {
        console.log(result.message);
      }
      getData('Andrey', '123')
        .then(result => {
          showTodo(result);
          clearTimeout(t);
          hideLoading();
        });
    },
    );
    newTodo.value = '';
  }
}

function setFilterTo(e) {
  const activeFilter = e.target.name;
  updateListByFilter(activeFilter);
}

export { switchState, addTodoItem, setFilterTo };
