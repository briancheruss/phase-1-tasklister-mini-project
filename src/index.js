document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Your code to handle the form submission can go here
    // For example, you can access the task description from the input field:
    const taskDescription = document.getElementById("new-task-description").value;

    // You can then use the task description to add a new task to the list
    // For simplicity, let's just alert the task description for now:
    alert(`New task created: ${taskDescription}`);
  });
});

