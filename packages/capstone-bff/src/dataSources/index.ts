import BooksAPI from './booksAPI';

export default function dataSources() {
  return {
    booksApi: new BooksAPI(),
  };
}
