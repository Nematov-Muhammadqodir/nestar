import { Injectable } from '@nestjs/common';

@Injectable()
export class BetchService {
	getHello(): string {
		return 'Welcome to Nestar BATCH Server!!';
	}
}
