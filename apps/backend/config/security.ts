import { Logger } from '@nestjs/common';
import { registerAs } from '@nestjs/config';
import { z, ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

const securitySchema = z.object({
  secret: z.string(),
  ttl: z.string(),
});

const logger = new Logger('Security config');

export default registerAs('security', () => {
  const values = {
    secret: process.env.JWT_SECRET,
    ttl: process.env.JWT_TTL,
  };

  try {
    securitySchema.parse(values);
  } catch (error) {
    if (error instanceof ZodError) {
      logger.error(fromZodError(error, { prefix: '' }));
    }
  }

  return values;
})
