document.addEventListener("DOMContentLoaded", function() {
    fetch('secret.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('secret').innerText = data.secret;
        })
        .catch(error => {
            console.error('Error fetching the secret:', error);
        });
});
