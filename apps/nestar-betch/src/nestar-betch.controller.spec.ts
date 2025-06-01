import { Test, TestingModule } from '@nestjs/testing';
import { NestarBetchController } from './nestar-betch.controller';
import { NestarBetchService } from './nestar-betch.service';

describe('NestarBetchController', () => {
  let nestarBetchController: NestarBetchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestarBetchController],
      providers: [NestarBetchService],
    }).compile();

    nestarBetchController = app.get<NestarBetchController>(NestarBetchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestarBetchController.getHello()).toBe('Hello World!');
    });
  });
});
