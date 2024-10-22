// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Select the Add Task button
    const taskInput = document.getElementById('task-input');   // Select the task input field
    const taskList = document.getElementById('task-list');     // Select the task list

    // Function to load tasks from Local Storage and display them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks from Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load each task but don't save it again to Local Storage
    }

    // Function to add a task to the list (with optional saving to Local Storage)
    function addTask(taskText, save = true) {
        const li = document.createElement('li'); // Create new li element
        li.textContent = taskText; // Set its textContent to taskText

        // Create a new button element for removing the task
        const removeButton = document.createElement('button'); // Create remove button
        removeButton.textContent = "Remove"; // Set button text
        removeButton.className = 'remove-btn'; // Give it a class name

        // Assign an onclick event to the remove button
        removeButton.onclick = function(event) {
            event.stopPropagation(); // Prevent triggering the li click event
            taskList.removeChild(li); // Remove the li element from taskList
            removeTaskFromStorage(taskText); // Remove the task from Local Storage
        };

        // Append the remove button to the li element
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';

        // Save the task to Local Storage if required
        if (save) {
            saveTaskToStorage(taskText);
        }
    }

    // Function to save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve the current tasks
        storedTasks.push(taskText); // Add the new task
        localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated task list back to Local Storage
    }

    // Function to remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve the current tasks
        const updatedTasks = storedTasks.filter(task => task !== taskText); // Remove the specified task
        localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Save the updated task list back to Local Storage
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim(); // Get and trim the input value
        if (taskText === "classList.add") {
            alert("Please enter a task."); // Alert if the input is empty
            return;
        }
        addTask(taskText); // Add the task and save it to Local Storage
    });

    // Add event listener for pressing the Enter key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim(); // Get and trim the input value
            if (taskText === "") {
                alert("Please enter a task."); // Alert if the input is empty
                return;
            }
            addTask(taskText); // Add the task and save it to Local Storage
        }
    });

    // Load tasks from Local Storage when the page loads
    loadTasks();
});