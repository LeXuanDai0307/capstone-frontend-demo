/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Book } from './entities/Book';
import { Category } from './entities/Category';

const categories: Category[] = [
  {
    id: '0',
    name: 'Fiction',
  },
  {
    id: '1',
    name: 'French',
  },
];

const books: Book[] = [
  {
    id: '0',
    title: 'Illusion Perdues',
    authorId: '1',
    categorieId: '1',
  },
  {
    id: '1',
    title: 'Dune',
    authorId: '0',
    categorieId: '0',
  },
];

@Injectable()
export class AppService {
  listBooks(): Book[] {
    return books;
  }

  findOneBook(id: string): Book | null {
    return books.find((b) => b.id === id);
  }

  listBookCategories(): Category[] {
    return categories;
  }

  findOneCategory(id: string): Category | null {
    return categories.find((c) => c.id === id);
  }

  async createBook(book: Book): Promise<Book> {
    try {
      if (books.find((b) => b.id === book.id)) {
        throw new Error('Book already exists');
      }

      setTimeout(() => {
        books.push(book);
      }, 1000);
      return book;
    } catch (error) {
      throw new HttpException('Error creating book', HttpStatus.BAD_REQUEST);
    }
  }

  async createCategory(category: Category): Promise<Category> {
    try {
      if (categories.find((c) => c.id === category.id)) {
        throw new Error('Category already exists');
      }

      setTimeout(() => {
        categories.push(category);
      }, 1000);
      return category;
    } catch (error) {
      throw new HttpException(
        'Error creating category',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
