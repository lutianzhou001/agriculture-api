import { Test, TestingModule } from '@nestjs/testing';
import { AgricultureService } from './agriculture.service';

describe('AgricultureService', () => {
  let service: AgricultureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgricultureService],
    }).compile();

    service = module.get<AgricultureService>(AgricultureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
