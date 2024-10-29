import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProducts(): string[] {
    return ['Producto 1', 'Producto 2'];
  }
}
