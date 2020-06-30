import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgricultureModule } from './farm/agriculture.module';

@Module({
  imports: [AgricultureModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
