let myLibrary = []


function Book(title, author, pages, read, id) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.id = id
}

const cardContainer = document.querySelector('.grid-container');
const inputTitle = document.getElementById('title')
const inputAuthor = document.getElementById('author')
const inputPages = document.getElementById('pages')
const inputRead = document.getElementById('read')
const formElement = document.getElementById('bookForm')
const errorMsg = document.querySelector('.messages')
const removeButton = document.querySelectorAll('.rmvBtn')

// Event listener for remove button to delete bookl from Library array
document.addEventListener("click", function(e){
    const target = e.target.closest('.rmvBtn'); // Or any other selector.
    if(target){
      // Do something with `target`.
        const itemText = target.parentElement.parentElement.firstChild.textContent
        const itemPos = myLibrary.findIndex(target => target.title == itemText) 

        console.log(itemText + ' ' + itemPos);
        console.log(myLibrary);
        myLibrary.splice(itemPos, 1);
    }
    resetGrid()
    updateCards()
  });


removeButton.forEach(item => {
    item.addEventListener('click', () => {
        const itemText = item.parentElement.parentElement.firstChild.textContent
        const itemPos = myLibrary.findIndex(item => item.title == itemText) 

        console.log(itemText + ' ' + itemPos);
        console.log(array);
        array.splice(itemPos, 1);
    })
})

formElement.addEventListener('submit', (e) => {
    let messages = []
    // e.preventDefault()
    // if (inputTitle.value === '' || inputTitle === null) {
    //     messages.push('Title is required')
    // }
    // if (messages.length > 0){
    //     e.preventDefault()
    //     errorMsg.innerText = messages.join(', ')
    // }
})

function addBook() {
    newBook = new Book
    newBook.title = inputTitle.value
    newBook.author = inputAuthor.value
    newBook.pages = inputPages.value
    isRead()
    newBook.id = myLibrary.length || 0
    myLibrary.push(newBook)
    console.log("Book added to Library")
    closeForm()
    resetGrid()
    updateCards()
    formElement.reset()
}

function isRead() {
    if (document.getElementById('read').checked) {
        newBook.read = true
    } else {
        newBook.read = false
    }
}

function resetGrid() {
    cardContainer.innerHTML = '';
}

function updateCards() {
    for (let i = 0; i < myLibrary.length; i++){
        addCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages)
    }
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