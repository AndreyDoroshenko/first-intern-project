function saveTodoInLocalStorage(list) {
  const serialList = JSON.stringify(list);
  window.localStorage.setItem('List', serialList);
}

function getData(username, password) {
  const url = 'http://localhost:3001/api/todo-list/' + username + '/tasks?password=' + password;
  return window.fetch(url, {
    method: 'GET',
  })
    .then(response => {
      if (!response.ok) {
        console.log('error, response status is:' + response.status);
      } else {
        return response.json();
      }
    });
}

function saveTask(username, text) {
  const url = 'http://localhost:3001/api/todo-list/' + username + '/tasks?text=' + text;
  return window.fetch(url, {
    method: 'POST',
  })
    .then(response => {
      if (!response.ok) {
        console.log('error, response status is:' + response.status);
      } else {
        return response.json();
      }
    });
}

function updateTask(username, taskID) {
  const url = 'http://localhost:3001/api/todo-list/' + username + '/tasks/' + taskID;
  return window.fetch(url, {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(response => {
      if (!response.ok) {
        console.log('error, response status is:' + response.status);
      } else {
        return response.json();
      }
    });
}

function getDataFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem('List'));
}

export { saveTodoInLocalStorage, getData, getDataFromLocalStorage, saveTask, updateTask };
