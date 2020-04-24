
  // our test code here  
  const library = new Library();
  const book = new Book('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', '978-0439708180');
  const patron = new Patron('Ashley Boucher', 'ashley@teamtreehouse.com');

  library.addBook(book);
  library.addPatron(patron);
