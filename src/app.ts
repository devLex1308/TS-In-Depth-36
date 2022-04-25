showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = `Hello from ${name}`;
}

enum Category1 { A = 'JavaScript', B = 'CSS', C = 'HTML' }

enum Category {
  'Javascript', 'CSS', 'HTML', 'TypeScript', 'Angular'
};

type Category2 = {
  A: 'JavaScript';
  B: 'CSS';
  C: 'HTML';
};


type Book = {
  id: number;
  title: string;
  author: string;
  available: boolean;
};

function getAllBooks(): Book[] {
  const books = [
    { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available: true },
    { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available: false },
    { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true },
    { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author: 'Andrea Chiarelli', available: true }
  ];

  return books;
}

function logFirstAvailable(books: Book[]): void {
  console.log(`Total number of books: ${books.length}`);

  const { title = 'Not found' } = books.find(book => book.available) || {};

  console.log(`First availeble book: ${title}`);
}

// =====================================================
// Task 02.02

logFirstAvailable(getAllBooks());