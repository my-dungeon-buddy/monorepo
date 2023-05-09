
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

import database from './config/database';

config();

const databaseConfig = database();

export default new DataSource({
  type: 'postgres',
  host: databaseConfig.host,
  port: databaseConfig.port,
  username: databaseConfig.username,
  password: databaseConfig.password,
  database: databaseConfig.database,
  entities: [
    '**/*.entity.ts'
  ],
  migrations: [
    './migrations/*.ts'
  ]
});
