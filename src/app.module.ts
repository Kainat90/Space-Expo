import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RocketsModule } from './rockets/rockets.module';

@Module({
  imports: [RocketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}