import { Module } from '@nestjs/common';
import { NestarBetchController } from './nestar-betch.controller';
import { NestarBetchService } from './nestar-betch.service';

@Module({
  imports: [],
  controllers: [NestarBetchController],
  providers: [NestarBetchService],
})
export class NestarBetchModule {}
