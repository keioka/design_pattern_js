interface Book {
    id: string,
    name: string
}

function Book (id: string, name: string) {
    this.id = id;
    this.name = name;
}

interface BookShelf {
    books: Array<Book>
}

function BookShelf () {
    this.books = [];
}

BookShelf.prototype.getBookAt = function (index: number) {
    return this.books[index];
}


BookShelf.prototype.addBook = function (id: string, name: string) {
    const book: Book = new Book(id, name)
    this.books.push(book);
}

BookShelf.prototype.iterator = function (book: Book) {
    return new BookShelfIterator(this.books);
}

function BookShelfIterator (bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
}

BookShelfIterator.prototype.hasNext = function () {
    return !!this.bookShelf[this.index]
}

BookShelfIterator.prototype.next = function () {
    const book = this.bookShelf[this.index]
    this.index++;
    return book
}

export default BookShelf
