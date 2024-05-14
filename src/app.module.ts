import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from './db/ormconfig';
import { LinksModule } from './links/links.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), LinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
