import { Controller, Get } from '@nestjs/common';
import { NestarBetchService } from './nestar-betch.service';

@Controller()
export class NestarBetchController {
  constructor(private readonly nestarBetchService: NestarBetchService) {}

  @Get()
  getHello(): string {
    return this.nestarBetchService.getHello();
  }
}
