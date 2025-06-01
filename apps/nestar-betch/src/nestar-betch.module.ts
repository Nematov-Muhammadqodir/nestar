import { Module } from '@nestjs/common';
import { NestarBetchController } from './nestar-betch.controller';
import { NestarBetchService } from './nestar-betch.service';
import { ConfigModule } from '@nestjs/config';
@Module({
	imports: [ConfigModule.forRoot()],
	controllers: [NestarBetchController],
	providers: [NestarBetchService],
})
export class NestarBetchModule {}
