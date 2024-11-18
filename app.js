document.getElementById('searchButton').addEventListener('click', function() {
    var input = document.getElementById('searchInput').value;
    fetch('superheroes.php?search=' + encodeURIComponent(input))
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data));
        })
        .catch(error => console.error('Error:', error));
});