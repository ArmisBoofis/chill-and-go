import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { EventController } from './event/event.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'development.env',
      isGlobal: true,
    }),
  ],
  controllers: [EventController],
  providers: [],
})
export class ApiModule {}
