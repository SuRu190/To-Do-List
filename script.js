function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.className = "task-text";
  span.textContent = taskText;

  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newTask = prompt("Edit your task", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}
