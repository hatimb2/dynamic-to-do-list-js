function addTask() {
    const taskText = taskInput.value.trim(); // Get the task input

    // Check if the task input is not empty
    if (taskText === "") {
        alert("Please enter a task."); // Alert if input is empty
        return; // Exit the function if no input
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText; // Set the textContent to the task text

    // Create a new remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove'; // Set the button text
    removeButton.className = 'remove-btn'; // Assign class name for styling

    // Assign an onclick event to the remove button
    removeButton.onclick = function() {
        taskList.removeChild(li); // Remove the li element from taskList
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the task input field
    taskInput.value = ""; // Reset the input field to empty
}