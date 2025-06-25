import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { DatabaseModule } from '../../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import MemberSchema from '../../schemas/Member.model';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { LikeModule } from '../like/like.module';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]), AuthModule, ViewModule, LikeModule],

	providers: [MemberService, MemberResolver],
	exports: [MemberService],
})
export class MemberModule {}
