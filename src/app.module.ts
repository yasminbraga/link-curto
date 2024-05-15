import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { LinksModule } from './links/links.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.PG_HOST || 'localhost',
        port: +process.env.PG_PORT || 5432,
        username: process.env.PG_USER || 'link_curto',
        password: process.env.PG_PASSWORD || 'link_curto',
        database: process.env.PG_NAME || 'link_curto',
        logging: true,
        entities: [resolve(__dirname, 'src/**/*.entity{.ts,.js}')],
        autoLoadEntities: process.env.RUN_MIGRATIONS === 'true',
        synchronize: process.env.RUN_MIGRATIONS === 'true',
      }),
    }),
    LinksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
