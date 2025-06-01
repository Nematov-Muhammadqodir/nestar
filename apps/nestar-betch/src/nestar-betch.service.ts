import { Injectable } from '@nestjs/common';

@Injectable()
export class NestarBetchService {
  getHello(): string {
    return 'Welcome to Nestar BATCH Server!!';
  }
}
