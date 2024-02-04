import { Logger } from '@nestjs/common';
import { Options } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import 'dotenv/config';
import { env } from 'process';
import { Migrator } from '@mikro-orm/migrations';

const logger = new Logger('MikroORM');
const defineConfig = {
  entities: ['./dist/entities/**/*.entity.js'],
  entitiesTs: ['./src/entities/**/*.entity.ts'],
  host: env.DB_HOST,
  user: env.DB_USER,
  dbName: env.DB_NAME,
  port: Number(env.DB_PORT),
  password: env.DB_PASSWORD,
  driver: PostgreSqlDriver,
  highlighter: new SqlHighlighter(),
  debug: true,
  logger: logger.log.bind(logger),
  metadataProvider: TsMorphMetadataProvider,
  driverOptions: {
    connection: { ssl: Boolean(env.IS_DEVELOPMENT) ? true : false },
  },
  metadataCache: { enabled: false },
  migrations: {
    tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
    path: './src/database/migrations', // path to the folder with migrations
    pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
    transactional: true, // wrap each migration in a transaction
    disableForeignKeys: false, // wrap statements with `set foreign_key_checks = 0` or equivalent
    allOrNothing: true, // wrap all migrations in master transaction
    dropTables: true, // allow to disable table dropping
    safe: true, // allow to disable table and column dropping
    emit: 'ts', // migration generation mode
  },
  extensions: [Migrator],
} as Options;
// console.log(Boolean(env.IS_DEVELOPMENT));

export default defineConfig;
