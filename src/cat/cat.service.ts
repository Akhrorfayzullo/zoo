import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
  public getHello(): string {
    return 'Meow!';
  }

  public introduce(): string {
    return 'My name is Tom!';
  }
}
