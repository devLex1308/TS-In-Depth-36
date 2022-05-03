import { createCustomer, getAllBooks, getObjectProperty, printRefBook, purge, setDefaultConfig } from './functions';
import type { Book, Librarian, Logger, TOptions, Magazine } from './interfaces';
import RefBook from './classes/encyclopedia';
import { UL } from './classes';
import { type Library, Shelf } from './classes';
import { Category } from './enums';
import { BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
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

// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);

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

// console.log(getProperty(getAllBooks()[0], 'title'));
// console.log(getProperty(getAllBooks()[0], 'markDamaged'));
// console.log(getProperty(getAllBooks()[0], 'isbn'));

// Task 05.01

// const ref = new ReferenceItem(1, 'Learn TypeScript', 2022);
// console.log({ ref });
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref.publisher);
// console.log(ref.getID());

// Task 05.03
// const refBook = new RefBook(1, 'Learn TypeScript', 2022, 3);
// console.log({ refBook });
// refBook.printItem();
// refBook.printCatation();

// Task 05.04

const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.name = 'Tikki';
// favoriteLibrarian.assistCustomer('L', 'Story');

// Task 05.05

// const personBook: PersonBook = {
//   id: 1,
//   author: 'Ann',
//   available: false,
//   category: Category.Angular,
//   email: 'a@i.ua',
//   name: 'Anna',
//   title: 'Unknow',
// };

// let o: TOptions = { speed: 23 };
// o = setDefaultConfig(o);
// console.log({ o });

// printRefBook(refBook);
// printRefBook(favoriteLibrarian);

// Task 06.05
// const flag = true;

// if (flag) {
//   import('./classes').then(module => {
//     const reader = module.Reader;
//     console.log({ reader });
//   }).catch(err => console.log(err));
// }

// if (flag) {
//   const module = await import('./classes');
//   const reader = module.Reader;
//   console.log({ reader });
// }

// Task 06.06
// let lib: Library; // = new Library();
// lib = {
//   id: 1,
//   name: 'Unknow',
//   address: 'Kyiv',
// };

// Task 07.01

const inventory: Book[] = [
  { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
  { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
  { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
  { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

// const result: Book[] = purge(inventory);
// console.log(result);

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());

// const magazines: Magazine[] = [
//   { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//   { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//   { title: 'Five Points', publisher: 'GSU' }
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(book => magazineShelf.add(book));

// console.log(magazineShelf.getFirst());
// console.log(magazineShelf.printTitels());
// console.log(magazineShelf.find('Five Points'));

// const result = getObjectProperty(getAllBooks()[0], 'author');
// console.log({ result });

// const bookRequiredFields: BookRequiredFields = {
//   author: 'Po',
//   id: 1,
//   title: '911',
//   available: false,
//   category: Category.Angular,
//   pages: 10,
//   markDamaged: (s: string) => console.log(s),

// };

// const updatedBook: UpdatedBook = {
//   id: 1,
// };

// const p: Parameters<СreateCustomerFunctionType> = ['Anna'];
// createCustomer(...p);

// Task 08.01
// const obj = new UL.UniversityLibrarian();
// console.log({ obj });
// obj.assistCustomer = null;
// UL.UniversityLibrarian['a'] = 1;
// UL.UniversityLibrarian.prototype['b'] = 1;

// Task 08.02

// const obj = new UL.UniversityLibrarian();
// console.log({ obj });

// obj.name = 'Tania';
// obj['printLibrarian']();

// Task 08.03

// const obj = new UL.UniversityLibrarian();
// console.log({ obj });
// const proto = Object.getPrototypeOf(obj);
// console.log(proto);
// proto.assistFaculty = null;
// proto.teachCommunity = null;
// obj.teachCommunity = null;
// obj.assistFaculty = null;

// Task 08.04

const enc = new RefBook(1, 'Learn TypeScript', 2022, 3);
enc.printItem();