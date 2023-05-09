import { registerAs } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { ZodError, z } from 'zod';
import { fromZodError } from 'zod-validation-error';

const databaseSchema = z.object({
  host: z.string(),
  port: z.number(),
  username: z.string(),
  password: z.string(),
  database: z.string(),
});

const logger = new Logger('Database config');
export default registerAs('database', () => {
  const values = {
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
  };

  try {
    databaseSchema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      logger.error(fromZodError(error, { prefix: '' }));
    }
  }

  return values;
});
