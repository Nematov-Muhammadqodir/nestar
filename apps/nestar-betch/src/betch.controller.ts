import { Controller, Get } from '@nestjs/common';
import { BetchService } from './betch.service';

@Controller()
export class BetchController {
	constructor(private readonly nestarBetchService: BetchService) {}

	@Get()
	getHello(): string {
		return this.nestarBetchService.getHello();
	}
}
