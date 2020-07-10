import { Module, HttpModule } from '@nestjs/common';
import { ExplorerController } from './explorer.controller';
import { ExplorerService } from './explorer.service';

@Module({
  imports: [HttpModule],
  controllers: [ExplorerController],
  providers: [ExplorerService]
})
export class ExplorerModule { }
