import { createCustomer } from './functions';
import { Book, Person } from './interfaces';

type Category2 = {
  A: 'JavaScript';
  B: 'CSS';
  C: 'HTML';
};

export type BookProperties = keyof Book;

export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdatedBook = Partial<Book>;

export type AuthorWoEmail = Omit<Person, 'email'>;
export type СreateCustomerFunctionType = typeof createCustomer;