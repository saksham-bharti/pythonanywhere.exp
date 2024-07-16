const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(uploadForm);

    fetch('https://sakshamBharti.pythonanywhere.com/upload', {  // Adjust URL as per your PythonAnywhere domain
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.body.innerHTML = data;  // Update HTML with response from Flask backend
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors or display messages to the user
    });
});
