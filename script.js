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

function addCard(title, author, pages) {
    const newCard = document.createElement("div")
    const newTitle = document.createElement("h2")
    const newAuthor = document.createElement("h3")
    const newPages = document.createElement("p")
    const controls = document.createElement("div")
    const rmvBtn = document.createElement("button")
    const readBtn = document.createElement("button")
    newCard.classList.add('card')
    newTitle.classList.add('title')
    newAuthor.classList.add('author')
    controls.classList.add('cardControls')
    rmvBtn.classList.add('rmvBtn')
    readBtn.classList.add('readBtn')
    cardContainer.appendChild(newCard)
    newCard.appendChild(newTitle)
    newCard.appendChild(newAuthor)
    newCard.appendChild(newPages)
    newCard.appendChild(controls)
    controls.appendChild(rmvBtn)
    controls.appendChild(readBtn)
    newTitle.innerText = title
    newAuthor.innerText = "by: " + author
    newPages.innerText = pages + " pages"
    rmvBtn.innerText = "Remove"
    readBtn.innerText = "Read"
}




function openForm() {
    document.getElementById('formPopUp').style.display = "block";
}

function closeForm() {
    document.getElementById('formPopUp').style.display = "none";
}