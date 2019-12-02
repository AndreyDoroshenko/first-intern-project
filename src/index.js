import {messages} from './messages';
// Подключение css
import './css/styles.css';



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
    button.addEventListener('click', deleteLine(id));
    text.classList.add('list__list-line-text');
    button.classList.add('list__line-delete-button');
    text.innerText = lineText;
    button.innerText = 'X';
    div.appendChild(input);
    div.appendChild(text);
    div.appendChild(button);
    return div;
}

function updateData () {
    const serialObj= JSON.stringify(todoList);
    localStorage.setItem('List', serialObj);
}

function getData () {
     return JSON.parse(localStorage.getItem('List')) || [];
}

const deleteLine = (id) => () => {
    const div = document.getElementById('list-'+id);
    div.remove();
    const deleted = todoList.findIndex((line) => line.id === id);
    todoList.splice(deleted, 1);
    updateData();
};

const switchState = (id) => () => {
        const edited = todoList.find((line) => line.id === id);
        if (edited) {
            edited.isDone = !edited.isDone;
            updateData(false);
        }
};

function addTodoItem() {
    let newTodo = document.querySelector('.list__new-input');
    if (newTodo.value.match(/\w+/)) {
        todoList.push({id: (todoList.length + 1), text: newTodo.value, isDone: false});
        const elem = createLine(todoList.length, newTodo.value, false);
        updateData(false);
        list.appendChild(elem);
    }
    newTodo.value = '';
}

function unHide(classes, hideClass) {
    const lineNewClass = classes.split(' ');
    console.log();
    if (lineNewClass.indexOf(hideClass) !== -1) {
        lineNewClass.splice(lineNewClass.indexOf(hideClass),1);
    }
    classes = lineNewClass.join(' ');
    return classes;
}

function setFilterTo (e) {
    activeFilter= e.target.name;
    let filterList = document.getElementsByClassName('list__list-line');
    for(let i = 0 ; i < filterList.length ; i++) {
        const input = filterList[i].firstChild;
        if ((input.checked === true && activeFilter === 'Active') || ( input.checked === false && activeFilter === 'Completed'))  {
            filterList[i].className += ' ' + 'list__list-line-hidden';
            console.log();
        } else {
            filterList[i].className = unHide(filterList[i].className, 'list__list-line-hidden')
        }
    }
}

let addButton = document.querySelector('.list__new-button');
addButton.addEventListener('click', addTodoItem);

let filter = document.querySelector('.list__filter');
filter.addEventListener('click', setFilterTo);

let activeFilter = 'Active';

let list = document.querySelector('.list__list');
const todoList = getData();
if(todoList){
    todoList.forEach((line) => {
        const elem = createLine(line.id, line.text, line.isDone);
        list.appendChild(elem);
    });
}
