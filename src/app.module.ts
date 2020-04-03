import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TradesModule } from './trades/trades.module';

@Module({
  imports: [UsersModule,TradesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
