/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Book } from './entities/Book';
import { Category } from './entities/Category';

@ApiTags('books')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/books')
  @ApiResponse({
    status: 200,
    type: [Book],
  })
  books() {
    return this.appService.listBooks();
  }

  @Get('/categories')
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  categories() {
    return this.appService.listBookCategories();
  }

  @ApiResponse({
    status: 404,
  })
  @Get('/books/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: Book,
  })
  book(@Param() params) {
    return this.appService.findOneBook(params.id);
  }

  @Get('/categories/:id')
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
  })
  @ApiResponse({
    status: 200,
    type: Category,
  })
  category(@Param() params) {
    return this.appService.findOneCategory(params.id);
  }

  @Post('/books')
  @ApiResponse({
    status: 200,
    type: Book,
  })
  async create(@Body() book: Book) {
    return await this.appService.createBook(book);
  }

  @Post('/categories')
  @ApiResponse({
    status: 200,
    type: Category,
  })
  async createCategory(@Body() category: Category) {
    return await this.appService.createCategory(category);
  }
}
