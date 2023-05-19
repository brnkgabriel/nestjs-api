import { Controller, Get } from "@nestjs/common";

@Controller()
export class AuthController {
  @Get()
  hello() {
    return 'Hello World'
  }
}