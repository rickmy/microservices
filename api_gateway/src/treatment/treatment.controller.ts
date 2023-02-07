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
import { TreatmentService } from './treatment.service';
import { CreateTreatmentDto } from './dto/create-treatment.dto';
import { UpdateTreatmentDto } from './dto/update-treatment.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
@ApiTags('Tratamientos')
@Controller('treatment')
export class TreatmentController {
  constructor(private readonly treatmentService: TreatmentService) {}

  @Post()
  //@UseGuards(AuthGuard)
  create(@Body() createTreatmentDto: CreateTreatmentDto) {
    return this.treatmentService.create(createTreatmentDto);
  }

  @Get()
  //@UseGuards(AuthGuard)
  findAll() {
    return this.treatmentService.findAll();
  }

  @Get(':id')
  //@UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.treatmentService.findOne(+id);
  }

  @Patch(':id')
  //@UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateTreatmentDto: UpdateTreatmentDto,
  ) {
    return this.treatmentService.update(+id, updateTreatmentDto);
  }

  @Delete(':id')
  //@UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.treatmentService.remove(+id);
  }
}
