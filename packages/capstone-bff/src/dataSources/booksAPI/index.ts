import { RESTDataSource } from '@apollo/datasource-rest';
import { IBook } from '@libs/shared-common';

export default class BooksAPI extends RESTDataSource {
  override baseURL = 'http://localhost:3002/';

  async getBook(id: string): Promise<IBook> {
    return this.get<IBook>(`movies/${encodeURIComponent(id)}`);
  }

  async getBooks(): Promise<IBook[]> {
    return this.get<IBook[]>(`books`);
  }
}
