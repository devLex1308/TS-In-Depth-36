import { createCustomer, getBooksByCategoryPromise } from './functions';
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

type Param1<T> = T extends (a: infer R, b: number, c: boolean) => Symbol ? R : never;
type Param2<T> = T extends (a: string, b: infer R, c: boolean) => Symbol ? R : never;
type Param3<T> = T extends (a: string, b: number, c: infer R) => Symbol ? R : never;

type P1 = fn;
type P2 = fn;
type P3 = fn;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;

type FRT = ReturnType<typeof getBooksByCategoryPromise>;
type RT = Unpromisify<FRT>;