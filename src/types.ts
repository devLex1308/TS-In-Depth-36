import { Book, Person } from './interfaces';

type Category2 = {
  A: 'JavaScript';
  B: 'CSS';
  C: 'HTML';
};

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;