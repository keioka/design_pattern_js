function Book(id, name) {
    this.id = id;
    this.name = name;
}
function BookShelf() {
    this.books = [];
}
BookShelf.prototype.getBookAt = function (index) {
    return this.books[index];
};
BookShelf.prototype.addBook = function (id, name) {
    const book = new Book(id, name);
    this.books.push(book);
};
BookShelf.prototype.iterator = function (book) {
    return new BookShelfIterator(this.books);
};
function BookShelfIterator(bookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
}
BookShelfIterator.prototype.hasNext = function () {
    return !!this.bookShelf[this.index];
};
BookShelfIterator.prototype.next = function () {
    const book = this.bookShelf[this.index];
    this.index++;
    return book;
};
export default BookShelf;
