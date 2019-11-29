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
    input.checked = isDone;
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
/*todoList.forEach((line) => {
    const elem = createLine(line.id,line.text, line.isDone);
    list.appendChild(elem);
});*/

//let list = document.querySelector('.list__list');

for (let i=0;i<todoList.length; i++ ){
    let elem= createLine(todoList[i].id,todoList[i].text,todoList[i].isDone);
    list.appendChild(elem);
}