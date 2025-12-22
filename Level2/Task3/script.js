const todoForm = document.getElementById('todoForm');
const todoContainer = document.getElementById('todoContainer');
const notification = document.getElementById('notification');

todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if(title.trim() === "" || description.trim() === "") {
        showToast("Please enter both title and description!", "error");
        return;
    }

    addTodo(title, description);
    todoForm.reset();
    showToast("Task added successfully!", "success");
});

function addTodo(title, description) {
    const item = document.createElement('div');
    item.className = 'todo-item';
    
    item.innerHTML = `
        <div>${title}</div>
        <div>${description}</div>
        <button class="delete-btn">X</button>
    `;

    const deleteBtn = item.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        item.remove();
        showToast("Task deleted!", "success");
    });

    todoContainer.appendChild(item);
}

// Function to show auto-closing toast notifications
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    notification.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000); // Auto close after 3 seconds
}
