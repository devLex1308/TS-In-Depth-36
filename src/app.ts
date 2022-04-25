showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category1 { A = 'JavaScript', B = 'CSS', C = 'HTML' }

enum Category {
  'Javascript', 'CSS', 'HTML', 'TypeScript', 'Angular'
};

type Category2 = {
  A: 'JavaScript';
  B: 'CSS';
  C: 'HTML';
};


type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
};

function getAllBooks() {
  const books = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', category: Category.Javascript, available: true },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', category: Category.Javascript, available: false },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.Javascript, author: 'Andrea Chiarelli', available: true }
  ];

  return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
  console.log(`Total number of books: ${books.length}`);

  const { title = 'Not found' } = books.find(book => book.available) || {};

  console.log(`First availeble book: ${title}`);
}

function getBookTitlesByCategory(category: Category = Category.Javascript) {
  const books = getAllBooks();

  return books.filter(book => book.category === category).map(({ title }) => title);
}

function logBookTitles(books: string[]): void {
  books.forEach(book => console.log(book));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
  const books = getAllBooks();
  const { title = 'not found', author = 'not found' } = books[index] || {};
  return [title, author];
}

function calcTotalPages() {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

  return data.reduce((count, lib) => {
    count += BigInt(lib.books) * BigInt(lib.avgPagesPerBook);
    return count;
  }, BigInt(0));
}

function createCustomerID(name: string, id: number): string {
  return `${id}-${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  if (age) {
    console.log(`Customer age: ${age}`);
  }

  if (city) {
    console.log(`Customer city: ${city}`);
  }
}

function getBookByID(id: Book['id']): Book {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

function сheckoutBooks(customer: string, ...bookIds: number[]): string[] {
  console.log(`Customer name: ${customer}`);
  return bookIds
    .map(id => getBookByID(id))
    .filter(book => book.available)
    .map(book => book.title);
}

// =====================================================
// Task 02.02

// logFirstAvailable(getAllBooks());



// logBookTitles(getBookTitlesByCategory(Category.Javascript));

// console.log(getBookAuthorByIndex(2));
// console.log(calcTotalPages());

// const myId: string = createCustomerID('Sasha', 23);
// console.log({ myId });
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;

// console.log(idGenerator('Tania', 27));

createCustomer('Taras');
createCustomer('Lesia', 17);
createCustomer('Ivan', 60, 'Ivano-Arankivsk');

getBookTitlesByCategory();
logFirstAvailable();

getBookByID(1);

const myBooks: string[] = сheckoutBooks('Tania', 1, 2, 4);
console.log({ myBooks });
