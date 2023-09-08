import { RESTDataSource } from '@apollo/datasource-rest';
import { IBook, ICategory } from '@libs/shared-common';

export class BooksAPI extends RESTDataSource {
  override baseURL = 'http://localhost:3002/';

  // BOOK
  async getBook(id: string): Promise<IBook> {
    return this.get<IBook>(`books/${encodeURIComponent(id)}`);
  }
  async getBooks(): Promise<IBook[]> {
    return this.get<IBook[]>(`books`);
  }
  async createBook(book: IBook): Promise<IBook> {
    return this.post<IBook>(`books`, { body: book });
  }

  // CATEGORY
  async getCategory(id: string): Promise<ICategory> {
    return this.get<ICategory>(`categories/${encodeURIComponent(id)}`);
  }
  async getCategories(): Promise<ICategory[]> {
    return this.get<ICategory[]>(`categories`);
  }
  async createCategory(category: ICategory): Promise<ICategory> {
    return this.post<ICategory>(`categories`, { body: category });
  }
}

export default function dataSources() {
  return {
    booksApi: new BooksAPI(),
  };
}
