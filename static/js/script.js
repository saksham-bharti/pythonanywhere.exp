// script.js

const uploadForm = document.getElementById('uploadForm');
const file1Input = document.getElementById('file1');
const file2Input = document.getElementById('file2');

uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file1', file1Input.files[0]);
    formData.append('file2', file2Input.files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
        });
        if (!response.ok) {
            throw new Error('Upload failed');
        }
        const data = await response.json();
        // Handle the response data, update UI, etc.
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
        // Handle errors and display appropriate messages
    }
});
