// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;
    
    // Name validation
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Email validation
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Phone validation
    if (phone && !isValidPhone(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a 10-digit phone number';
        isValid = false;
    }
    
    // Message validation
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }
    
    // If form is valid, submit it (in a real app, you would send to server)
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function isValidPhone(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

// To-Do List Functionality
document.getElementById('addTodoBtn').addEventListener('click', addTodo);
document.getElementById('todoInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const input = document.getElementById('todoInput');
    const task = input.value.trim();
    
    if (task) {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        todoList.appendChild(li);
        input.value = '';
        
        // Add event listener to delete button
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.remove();
        });
    }
}