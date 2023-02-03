import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { DiagnosticService } from './diagnostic.service';
import { CreateDiagnosticDto } from './dto/create-diagnostic.dto';
import { UpdateDiagnosticDto } from './dto/update-diagnostic.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
@ApiTags('Diagnosticos')
@Controller('diagnostic')
export class DiagnosticController {
  constructor(private readonly diagnosticService: DiagnosticService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createDiagnosticDto: CreateDiagnosticDto) {
    return this.diagnosticService.create(createDiagnosticDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.diagnosticService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.diagnosticService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateDiagnosticDto: UpdateDiagnosticDto,
  ) {
    return this.diagnosticService.update(+id, updateDiagnosticDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.diagnosticService.remove(+id);
  }
}
