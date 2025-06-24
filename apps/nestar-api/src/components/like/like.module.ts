import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeResolver } from './like.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import LikeSchema from '../../schemas/Like.model';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }])],
	providers: [LikeService, LikeResolver],
})
export class LikeModule {}
