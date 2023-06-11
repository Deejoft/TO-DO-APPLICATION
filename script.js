document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');
  
    addButton.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = createTaskElement(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    }
  
    function createTaskElement(taskText) {
      const taskItem = document.createElement('li');
      const taskCheckbox = document.createElement('input');
      taskCheckbox.type = 'checkbox';
      const taskTextSpan = document.createElement('span');
      taskTextSpan.textContent = taskText;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      taskItem.appendChild(taskCheckbox);
      taskItem.appendChild(taskTextSpan);
      taskItem.appendChild(deleteButton);
  
      return taskItem;
    }
  
    function handleTaskClick(event) {
      const target = event.target;
  
      if (target.nodeName === 'INPUT' && target.type === 'checkbox') {
        const taskItem = target.parentNode;
        taskItem.classList.toggle('completed');
      } else if (target.nodeName === 'BUTTON') {
        const taskItem = target.parentNode;
        taskList.removeChild(taskItem);
      }
    }
  });
  