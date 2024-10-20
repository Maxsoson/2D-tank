// Simple form submission handling
const form = document.getElementById('login-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "title.html";
});