const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.addEventListener("dblclick", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value="";
    }
});
