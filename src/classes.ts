/* eslint-disable no-underscore-dangle */

import * as Interfaces from './interfaces';

export abstract class ReferenceItem {
  // title: string;
  // year: number;

  // constructor(newTitle: string, newYear: number) {
  //   console.log('Creating a new ReferenceItem');

  //   this.title = newTitle;
  //   this.year = newYear;
  // }
  #id: number;
  static departmen: string = 'Reserch Department';

  constructor(id: number, public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem');
    this.#id = id;
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department: ${ReferenceItem.departmen}`);
    console.log(`Department: ${Object.getPrototypeOf(this).constructor.departmen}`);
  }

  getID(): number {
    return this.#id;
  }

  private _publisher: string;

  get publisher(): string {
    return this._publisher;
  }

  set publisher(newPublisher) {
    this._publisher = newPublisher;
  }

  abstract printCatation(): void;
}

class UniversityLibrarian implements Interfaces.Librarian {
  name: string;
  email: string;
  department: string;
  assistCustomer(custName: string, bookTitle: string) {
    console.log(`${this.name} is assisting ${custName} with the book ${bookTitle}`);
  }
}

export { Encyclopedia, UniversityLibrarian };