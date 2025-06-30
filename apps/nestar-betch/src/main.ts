import { NestFactory } from '@nestjs/core';
import { BetchModule } from './betch.module';

async function bootstrap() {
	const app = await NestFactory.create(BetchModule);
	await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
