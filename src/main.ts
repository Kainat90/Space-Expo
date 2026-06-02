import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {


  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
  .setTitle('SpaceExpo Launch Control')
.setDescription('SpaceExpo Launch Control manages lifecycle of rockets.')
.setVersion('1.0')
.addTag('Rockets')
.build();

const documentFactory =()=> SwaggerModule.createDocument(app, config);
SwaggerModule.setup('rockets',app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
