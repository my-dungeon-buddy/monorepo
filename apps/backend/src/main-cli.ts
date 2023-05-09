import { CommandFactory } from 'nest-commander';
import { Logger, PinoLogger } from 'nestjs-pino';
import { AppModule } from './app/app.module';

const bootstrap = async () => {
  const logger = new Logger(
    new PinoLogger({
      pinoHttp: {
        transport: process.env.NODE_ENV !== 'production' ? {target: 'pino-pretty'} : undefined,
      },
    }),
    {}
  );
  await CommandFactory.run(AppModule, {logger});
};

bootstrap();
