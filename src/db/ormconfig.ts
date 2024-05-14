import { resolve } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: +process.env.PG_PORT || 5432,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_NAME,
  synchronize: false,
  logging: true,
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: [resolve(__dirname, 'src/db/migrations/*{.ts,.js}')],
  migrationsTableName: 'links',
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
