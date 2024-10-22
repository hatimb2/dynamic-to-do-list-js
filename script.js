document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get the task input

        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return; // Exit the function if no input
        }

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText; // Set the textContent to the task text

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove'; // Set the button text
        removeButton.className = 'remove-btn'; // Assign class name for styling

        // Add event listener to remove button
        removeButton.onclick = function() {
            taskList.removeChild(li); // Remove the task from the list
        };

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = ""; // Reset the input field to empty
    }

    // Attach event listeners
    addButton.addEventListener('click', addTask); // Click to add task
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Allow adding task with "Enter" key
        }
    });
});
