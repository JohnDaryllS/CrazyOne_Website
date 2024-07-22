document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('Name').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        message: document.getElementById('textarea').value
    };

    emailjs.send('service_4zsxdvc', 'template_v9szmsd', formData)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');

        document.getElementById('contact-form').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send your message. Please try again later.');
    });
});
