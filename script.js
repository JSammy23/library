let myLibrary = []

myLibrary.forEach(book => {
    console.log(book)
})

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

const cardContainer = document.querySelector('.grid-container');

function addBook() {
    // To Do //
}

function addCard() {
    const newCard = document.createElement("div")
    const newTitle = document.createElement("h2")
    const newAuthor = document.createElement("h3")
    newCard.classList.add('card')
    newTitle.classList.add('title')
    newAuthor.classList.add('author')
    cardContainer.appendChild(newCard)
    newCard.appendChild(newTitle)
    newCard.appendChild(newAuthor)
}


function openForm() {
    document.getElementById('formPopUp').style.display = "block";
}

function closeForm() {
    document.getElementById('formPopUp').style.display = "none";
}