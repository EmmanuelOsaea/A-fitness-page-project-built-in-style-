document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! We have received your message.`);
    
    // Here, you can add code to handle the form submission,
    // such as sending the data to a server or processing it.
    
    // Clear the form
    document.getElementById('contactForm').reset();
});
