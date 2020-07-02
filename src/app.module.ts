import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AgricultureModule } from './farm/agriculture.module';
import { MongooseModule } from '@nestjs/mongoose';
import { default as config } from './config';

const userString = config.db.user && config.db.pass ? (config.db.user + ':' + config.db.pass + '@') : '';
const authSource = config.db.authSource ? ('?authSource=' + config.db.authSource + '&w=1') : '';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://' + userString + config.db.host + ':' + (config.db.port || '27017') + '/' + config.db.database + authSource, { useFindAndModify: false }),
    AgricultureModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
