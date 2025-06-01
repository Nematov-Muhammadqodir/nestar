import { NestFactory } from '@nestjs/core';
import { NestarBetchModule } from './nestar-betch.module';

async function bootstrap() {
  const app = await NestFactory.create(NestarBetchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
