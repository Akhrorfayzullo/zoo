import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'wow-wow!';
  }

  public introduce(): string {
    return 'My name is T-Rex';
  }

  public modifyDetail(): string {
    return 'Modified';
  }
}
