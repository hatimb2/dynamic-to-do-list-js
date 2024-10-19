// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn'); // Select the Add Task button
    const taskInput = document.getElementById('task-input');   // Select the task input field
    const taskList = document.getElementById('task-list');     // Select the task list

    // Function to add a task to the list
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim the input value

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert if the input is empty
            return; // Exit the function if empty
        }

        // Create a new list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Add click event to mark the task as completed
        li.onclick = function() {
            li.classList.toggle('completed'); // Toggle the 'completed' class on click
        };

        // Add click event to remove the task
        removeButton.onclick = function(event) {
            event.stopPropagation(); // Prevent triggering the li click event
            taskList.removeChild(li); // Remove the list item when button is clicked
        };

        // Append the remove button to the list item, then append the list item to the task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add event listener for pressing the Enter key in the input field
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask(); // Call addTask if Enter is pressed
        }
    });
});
