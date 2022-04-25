/* eslint-disable no-redeclare */
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


interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  // markDamaged?: (reason: string) => void;
  markDamaged?(reason: string): void;
};

type BookProperties = keyof Book;

interface DamageLogger {
  (reason: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string, bookTitle: string) => void;
}

function getAllBooks(): readonly Book[] {
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

function getBookByID(id: Book['id']): Book | undefined {
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

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: unknown[]): string[] {
  const books = getAllBooks();

  if (args.length === 1) {
    const [arg] = args;

    if (typeof arg === 'string') {
      return books.filter(({ author }) => author === arg).map(({ title }) => title);
    } else if (typeof arg === 'boolean') {
      return books.filter(({ available }) => available === arg).map(({ title }) => title);
    }

  } else if (args.length === 2) {
    const [idArg, availableArg] = args;
    if (typeof idArg === 'number' && typeof availableArg === 'boolean') {
      return books.filter(({ id, available }) => id === idArg && available === availableArg).map(({ title }) => title);
    }
  }
  return [];
}

function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

function bookTitleTransform(title: any): string | never {
  assertStringValue(title);
  return title.split('').reverse().join('');
}

function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

function getProperty(book: Book, prop: BookProperties): any {
  const value = book[prop];
  return typeof value === 'function' ? value.name : value;
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

// createCustomer('Taras');
// createCustomer('Lesia', 17);
// createCustomer('Ivan', 60, 'Ivano-Arankivsk');

// getBookTitlesByCategory();
// logFirstAvailable();

// getBookByID(1);

// const myBooks: string[] = сheckoutBooks('Tania', 1, 2, 4);
// console.log({ myBooks });

// Task 03.03

// console.log(getTitles(1, true));

// Task 03.04

// console.log(bookTitleTransform('abc'));
// console.log(bookTitleTransform(123));

// Task 04.01

// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   // year: 2015,
//   // copies: 3
//   markDamaged: (reason: string) => console.log(`Damaged: ${reason}`),
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02

// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);

// logDamage('missing back cover'); ('missing back cover');

// Task 04.03

// const favoriteAuthor: Author = {
//   name: 'Artur',
//   email: 'a@i.ua',
//   numBooksPublished: 3,
// };

// const favoriteLibrarian: Librarian = {
//   name: 'Artur',
//   email: 'a@i.ua',
//   department: 'history',
//   assistCustomer: (custName: string, bookTitle: string) => { },
// };


// Task 04.04

// const offer: any = {
//   book: {
//     title: 'Essential TypeScript',
//   },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);

// Task 04.05

console.log(getProperty(getAllBooks()[0], 'title'));
console.log(getProperty(getAllBooks()[0], 'markDamaged'));
console.log(getProperty(getAllBooks()[0], 'isbn'));