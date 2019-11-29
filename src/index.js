import {messages} from './messages';
// Подключение css
import './css/styles.css';

const todoList = [
    {id: 1, text: 'Learn JS', isDone: false},
    {id: 2, text: 'Learn React', isDone: true},
    {id: 3, text: 'Make frontend great again', isDone: false},
];

function createLine( id, lineText, isDone ){
    let div = document.createElement('div');
    div.id = 'list-'+ id;
    let input = document.createElement('input');
    let text = document.createElement('div');
    let button = document.createElement('button');
    div.classList.add('list__list-line');
    input.type = 'checkbox';
    input.checked = isDone || false;
    text.classList.add('list__list-line-text');
    button.classList.add('list__line-delete-button');
    text.innerText = lineText;
    button.innerText = 'X';

    div.appendChild(input);
    div.appendChild(text);
    div.appendChild(button);

    return div;
}
let list = document.querySelector('.list__list');
todoList.forEach((line) => {
    const elem = createLine(line.id,line.text, line.isDone);
    list.appendChild(elem);
});

function addTodoItem(){
    let newTodo=document.querySelector('.list__new-input');
    if (newTodo.value.match(/\w+/)) {
        todoList.push({id: (todoList.length + 1), text: newTodo.value, isDone: false});
        const elem = createLine(todoList.length, newTodo.value, false);
        list.appendChild(elem);
    }
    newTodo.value = '';
}

let addButton=document.querySelector('.list__new-button');
addButton.addEventListener('click', addTodoItem);


