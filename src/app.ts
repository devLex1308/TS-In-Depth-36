import { setDefaultConfig } from './functions';
import type { Logger, TOptions } from './interfaces';

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
// const refBook = new Encyclopedia(1, 'Learn TypeScript', 2022, 3);
// console.log({ refBook });
// refBook.printItem();
// refBook.printCatation();

// Task 05.04

// const favoriteLibrarian: Librarian = new UniversityLibrarian();
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

let o: TOptions = { speed: 23 };
o = setDefaultConfig(o);
console.log({ o });

