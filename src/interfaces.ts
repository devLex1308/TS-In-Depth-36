import { Category } from './enums';

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

interface TOptions {
  duration?: number;
  speed?: number;
}

export { Book, DamageLogger as Logger, Person, Author, Librarian, TOptions }
