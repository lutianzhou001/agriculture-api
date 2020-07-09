import { Test, TestingModule } from '@nestjs/testing';
import { FarmingController } from './farming.controller';

describe('Agriculture Controller', () => {
  let controller: FarmingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FarmingController],
    }).compile();

    controller = module.get<FarmingController>(FarmingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
