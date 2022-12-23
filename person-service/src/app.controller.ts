import { Controller, Get } from '@nestjs/common';
import { Patient } from '@prisma/client';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async getTest(): Promise<Patient[]> {
    return await this.prisma.patient.findMany();
  }
}
