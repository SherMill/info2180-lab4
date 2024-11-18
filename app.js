document.getElementById('searchButton').addEventListener('click', function() {
    fetch('superheroes.php')
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
        })
        .catch(error => console.error('Error:', error));
});