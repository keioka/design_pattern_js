import Bookself from './iterator';

(function run() {
  const bookself = new Bookself();
  bookself.addBook('23das', 'Book 1');
  bookself.addBook('323dsd', 'Book 2');
  bookself.addBook('dsa323', 'Book 3');
  bookself.addBook('dsdsaa323', 'Book 4');
  bookself.addBook('dsa323dsad', 'Book 5');
  bookself.addBook('dsda3232', 'Book 6');
  bookself.addBook('3dsa23dsd', 'Book 7');

  const iterator = bookself.iterator();

  while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(book);
  }
})();
