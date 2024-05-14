import { resolve } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.PG_HOST || 'localhost',
  port: +process.env.PG_PORT || 5432,
  username: process.env.PG_USER || 'link_curto',
  password: process.env.PG_PASSWORD || 'link_curto',
  database: process.env.PG_NAME || 'link_curto',
  synchronize: false,
  logging: true,
  entities: [resolve(__dirname, 'src/**/*.entity{.ts,.js}')],
  migrations: [resolve(__dirname, 'src/db/migrations/*{.ts,.js}')],
  migrationsTableName: 'migrations',
  migrationsRun: true,
};

const dataSource = new DataSource(dataSourceOptions);
console.log(process.env.PG_USER);
export default dataSource;
