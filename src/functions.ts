/* eslint-disable no-redeclare */
/* eslint-disable no-underscore-dangle */

import { Category } from './enums';
import { Book, Callback, LibMgrCallback, TOptions } from './interfaces';
import { BookOrUndefined, BookProperties } from './types';
import { RefBook } from './classes';

export function getAllBooks(): readonly Book[] {
  const books = <const>[
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', category: Category.Javascript, available: true },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', category: Category.Javascript, available: false },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', category: Category.CSS, available: true },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.Javascript, author: 'Andrea Chiarelli', available: true }
  ];

  return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
  console.log(`Total number of books: ${books.length}`);

  const { title = 'Not found' } = books.find(book => book.available) || {};

  console.log(`First availeble book: ${title}`);
}

export function getBookTitlesByCategory(category: Category = Category.Javascript) {
  const books = getAllBooks();

  return books.filter(book => book.category === category).map(({ title }) => title);
}

export function logBookTitles(books: string[]): void {
  books.forEach(book => console.log(book));
}

export function getBookAuthorByIndex(index: number): [title: string, author: string] {
  const books = getAllBooks();
  const { title = 'not found', author = 'not found' } = books[index] || {};
  return [title, author];
}

export function calcTotalPages() {
  const data = <const>[
    { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
    { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
    { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

  return data.reduce((count, lib) => {
    count += BigInt(lib.books) * BigInt(lib.avgPagesPerBook);
    return count;
  }, BigInt(0));
}

export function createCustomerID(name: string, id: number): string {
  return `${id}-${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  if (age) {
    console.log(`Customer age: ${age}`);
  }

  if (city) {
    console.log(`Customer city: ${city}`);
  }
}

export function getBookByID(id: Book['id']): BookOrUndefined {
  const books = getAllBooks();
  return books.find(book => book.id === id);
}

export function сheckoutBooks(customer: string, ...bookIds: number[]): string[] {
  console.log(`Customer name: ${customer}`);
  return bookIds
    .map(id => getBookByID(id))
    .filter(book => book.available)
    .map(book => book.title);
}

export function getTitles(author: string): string[];
export function getTitles(available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: unknown[]): string[] {
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

export function assertStringValue(value: any): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error('value should have been a string');
  }
}

export function assertRefBookInstance(condition: any): asserts condition {
  if (!condition) {
    throw new Error('It is not an instance of RefBook');
  }
}

export function bookTitleTransform(title: any): string | never {
  assertStringValue(title);
  return title.split('').reverse().join('');
}

export function printBook(book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getProperty(book: Book, prop: BookProperties): any {
  const value = book[prop];
  return typeof value === 'function' ? value.name : value;
}

export function setDefaultConfig(optopns: TOptions): TOptions {
  optopns.duration ??= 100;
  optopns.speed ??= 60;
  return optopns;
}

export function printRefBook(data: any): void {
  assertRefBookInstance(data instanceof RefBook);
  data.printItem();
}

export function purge<T>(inventory: T[]): T[] {
  return inventory.slice(2);
}

export function getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
  const value = obj[prop];
  return typeof value === 'function' ? value.name : value;
}


export function getBooksByCategory(category: Category, callback: Callback<string>): void {
  setTimeout(() => {
    try {
      const titles = getBookAuthorByIndex(category);
      if (titles.length > 0) {
        callback(null, titles);
      } else {
        throw new Error('No books found');
      }
    } catch (err) {
      callback(err, null);
    }

  }, 2000);
}

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
  if (err) {
    console.log(err.message);
  } else {
    console.log(titles);
  }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
  const p = new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {

      const titles = getBookAuthorByIndex(category);
      if (titles.length > 0) {
        resolve(titles);
      } else {
        reject('No books found');
      }

    }, 2000);
  });
  return p;
}

export async function logSearchResults(category: Category) {
  const result: Awaited<ReturnType<typeof getBooksByCategoryPromise>> = await getBooksByCategoryPromise(category);
  console.log(result.length);
}