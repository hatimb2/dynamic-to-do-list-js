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
        const li = document.createElement('li'); // Step 1: Create new li element
        li.textContent = taskText; // Step 2: Set its textContent to taskText

        // Create a new button element for removing the task
        const removeButton = document.createElement('button'); // Step 3: Create remove button
        removeButton.textContent = "Remove"; // Step 4: Set button text
        removeButton.className = 'remove-btn'; // Step 5: Give it a class name

        // Assign an onclick event to the remove button
        removeButton.onclick = function(event) {
            event.stopPropagation(); // Prevent triggering the li click event
            taskList.removeChild(li); // Remove the li element from taskList
        };

        // Append the remove button to the li element
        li.appendChild(removeButton); // Step 6: Append the button to the li

        // Append the li to taskList
        taskList.appendChild(li); // Step 7: Append the li to the task list

        // Clear the task input field
        taskInput.value = ''; // Step 8: Clear the input field
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
