import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import { setSecurity } from './security';

const prefix = '';
let schemas: any = ['https', 'http'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      validationError: { target: false, value: false },
    }),
  );
  setSecurity(app);
  const config = app.get(ConfigService);
  const port: number = config.get<number>('application.port');
  if (process.env.SITE === 'local') {
    schemas = schemas.reverse();
  }

  const options = new DocumentBuilder()
    .setTitle('Payvision')
    .setSchemes(...schemas)
    .setBasePath(prefix)
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('*explorer', app, document);

  await app.listen(port);
}
bootstrap();
