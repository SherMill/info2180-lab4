function searchSuperhero() {
    var query = document.getElementById('searchInput').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'superheroes.php?query=' + encodeURIComponent(query), true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('result').innerHTML = xhr.responseText;
        } else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}