import * as Interfaces from '../interfaces';
import { format, logger, logParameter, sealed, writable } from './decorators';

// @sealed('UniversityLibrarian')
// @logger
class UniversityLibrarian implements Interfaces.Librarian {
  @format() name: string;
  email: string;
  department: string;
  assistCustomer(@logParameter custName: string, @logParameter bookTitle: string) {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  }

  @writable(true)
  assistFaculty(): void {
    console.log('Assisting faculty');
  }

  @writable(false)
  teachCommunity(): void {
    console.log('Teaching community');
  }
}


export { UniversityLibrarian };