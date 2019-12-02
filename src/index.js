import {messages} from './messages';
// Подключение css
import './css/styles.css';

const todoList = [];

function createLine(id, lineText, isDone) {
    let div = document.createElement('div');
    div.id = 'list-' + id;
    let input = document.createElement('input');
    let text = document.createElement('div');
    let button = document.createElement('button');
    div.classList.add('list__list-line');
    input.type = 'checkbox';
    input.checked = isDone || false;
    input.addEventListener('change', switchState(id));
    text.classList.add('list__list-line-text');
    button.classList.add('list__line-delete-button');
    text.innerText = lineText;
    button.innerText = 'X';
    div.appendChild(input);
    div.appendChild(text);
    div.appendChild(button);
    return div;
}

function updateData (record) {
    const serialObj= JSON.stringify(record);
    localStorage.setItem(record.id, serialObj);
}

function getData () {
    for (let i=1; (JSON.parse((localStorage.getItem(i.toString())))); i++) {
        todoList.push(JSON.parse((localStorage.getItem(i.toString()))));
    }
}

const switchState = (id) => () => {
        const edited = todoList.find((line) => line.id === id);
        if (edited) {
            edited.isDone = !edited.isDone;
            updateData(edited);
        }
};

function addTodoItem() {
    let newTodo = document.querySelector('.list__new-input');
    if (newTodo.value.match(/\w+/)) {
        todoList.push({id: (todoList.length + 1), text: newTodo.value, isDone: false});
        const elem = createLine(todoList.length, newTodo.value, false);
        updateData({id: todoList.length, text: newTodo.value , isDone: false});
        list.appendChild(elem);
        console.log(todoList);
    }
    newTodo.value = '';
}

let addButton = document.querySelector('.list__new-button');
addButton.addEventListener('click', addTodoItem);

let list = document.querySelector('.list__list');
getData();
todoList.forEach((line) => {
    const elem = createLine(line.id, line.text, line.isDone);
    list.appendChild(elem);
});

