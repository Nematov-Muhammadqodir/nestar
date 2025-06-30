import { Module } from '@nestjs/common';
import { BetchController } from './betch.controller';
import { BetchService } from './betch.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
	imports: [ConfigModule.forRoot(), DatabaseModule, ScheduleModule.forRoot()],
	controllers: [BetchController],
	providers: [BetchService],
})
export class BetchModule {}
