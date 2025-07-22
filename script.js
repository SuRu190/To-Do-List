const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let editIndex = null;

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    if (editIndex !== null) {
      // Edit mode
      const liToEdit = taskList.children[editIndex];
      liToEdit.querySelector(".task-text").textContent = taskText;
      addBtn.textContent = "Add Task";
      editIndex = null;
    } else {
      // Create new task
      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">❌</button>
      `;

      // Task complete toggle
      li.addEventListener("click", (e) => {
        if (!e.target.classList.contains("edit-btn") && !e.target.classList.contains("delete-btn")) {
          li.classList.toggle("completed");
        }
      });

      // Edit button
      li.querySelector(".edit-btn").addEventListener("click", () => {
        taskInput.value = li.querySelector(".task-text").textContent;
        editIndex = Array.from(taskList.children).indexOf(li);
        addBtn.textContent = "Update";
      });

      // Delete button
      li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
      });

      taskList.appendChild(li);
    }

    taskInput.value = "";
  }
});
