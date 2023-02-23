const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
    .then(data => outputJoke(data))
}

function outputJoke(joke) {
    document.getElementById('joke').innerText = joke.value;
    console.log(joke.value);
}

getJoke();