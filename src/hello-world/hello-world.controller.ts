import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HelloWorldService } from './hello-world.service';

@ApiTags('Hello World')
@Controller('hello-world')
export class HelloWorldController {
  constructor(private readonly service: HelloWorldService) {}

  @Get('getHello')
  getHello(): string {
    return this.service.getHello();
  }
}
