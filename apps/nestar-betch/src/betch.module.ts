import { Module } from '@nestjs/common';
import { BetchController } from './betch.controller';
import { BetchService } from './betch.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { MemberModule } from 'apps/nestar-api/src/components/member/member.module';
import { MongooseModule } from '@nestjs/mongoose';
import MemberSchema from 'apps/nestar-api/src/schemas/Member.model';
import PropertySchema from 'apps/nestar-api/src/schemas/Property.model';
@Module({
	imports: [
		ConfigModule.forRoot(),
		DatabaseModule,
		ScheduleModule.forRoot(),
		MongooseModule.forFeature([
			{ name: 'Member', schema: MemberSchema },
			{ name: 'Property', schema: PropertySchema },
		]),
	],
	controllers: [BetchController],
	providers: [BetchService],
})
export class BetchModule {}
