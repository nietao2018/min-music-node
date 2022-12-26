import { Module } from '@nestjs/common';
import { MusicModule } from './modules/music/music.module';

@Module({
  imports: [
    MusicModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
