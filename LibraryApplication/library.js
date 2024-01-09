const myLibrary = [];

function Book(title, author, numPages, ifRead){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.ifRead = ifRead;
    this.info = function(){
        var info = this.title + ' by ' + this.author + ', ' + this.numPages + ', ' + this.ifRead;
        return info;
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks(){
    //get document element id named libraryDisplay
    const libraryDisplay = document.getElementById('libraryDisplay');
    //clear existing aka to update
    libraryDisplay.innerHTML = '';

    for(let i=0; i<myLibrary.length; i++){
        const book = myLibrary[i];
        //create a card base off info of author, title, etc
        //a card will be created for each book
        const card = document.createElement('div');
        //we need to use css to create the card attributes
        card.className = 'book-card'
        card.textContent = book.info();
        libraryDisplay.appendChild(card);
    }
}

var theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 300, true);
addBookToLibrary(theHobbit);

displayBooks();