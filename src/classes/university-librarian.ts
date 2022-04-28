import * as Interfaces from '../interfaces';

class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string, bookTitle: string) {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  }
}

export { UniversityLibrarian };