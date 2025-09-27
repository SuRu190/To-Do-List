const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

const addTask = () => {
  const val = taskInput.value.trim();
  if(val.length === 0) return;
  
  const li = document.createElement('li');
  li.className = 'task-item';

  const checkbox = document.createElement('span');
  checkbox.className = 'custom-checkbox';

  const text = document.createElement('span');
  text.className = 'task-text';
  text.textContent = val;

  // ✅ Edit button
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = '✏️';

  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.textContent = '❌';

  // Toggle complete
  checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('checked');
    text.classList.toggle('completed');
  });

  // Delete task
  delBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  // ✅ Edit task
  editBtn.addEventListener('click', () => {
    // Fill input with current text
    taskInput.value = text.textContent;
    taskInput.focus();

    // Remove the old task temporarily
    taskList.removeChild(li);

    // When user presses Enter or clicks Add, the updated text will replace it
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(editBtn);
  li.appendChild(delBtn);

  taskList.appendChild(li);

  taskInput.value = '';
};

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keyup', (e) => {
  if(e.key === 'Enter') addTask();
});
