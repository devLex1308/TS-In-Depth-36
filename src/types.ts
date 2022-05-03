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

type fn = (a: string, b: number, c: boolean) => Symbol;

type Param1 = <T>(a: T, b: number, c: boolean) => Symbol;
type Param2 = <T>(a: string, b: T, c: boolean) => Symbol;
type Param3 = <T>(a: string, b: number, c: T) => Symbol;

type P1 = fn;
type P2 = fn;
type P3 = fn;