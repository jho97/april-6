const message = document.querySelector('#message')
const addMovie = (event) => {
    event.preventDefault();
    let inputField = document.querySelector('input')
    
    let movie = document.createElement('li')
    
    let movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle)
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);
    
    document.querySelector('ul').appendChild(movie)
    
    inputField.value = ''
}

const deleteMovie = (event) => {
    event.target.parentNode.remove()
    // message.textContent = 'movie deleted'
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted`
}

const crossOffMovie = (event) => {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked') === true) {
        // message.textContent = 'movie watched!'
        message.textContent = `${event.target.textContent} watched`
    } else {
        // message.textContent = 'movie added back!'
        message.textContent = `${event.target.textContent} added back`

    }
}

const revealMessage = () => {
    message.classList.remove('hide')

    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
document.querySelector('form').addEventListener('submit', addMovie);

