import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger/dist';
import { PatientEntity } from './entities/patient.entity';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('patient')
@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  @ApiOkResponse({ type: PatientEntity, description: 'Paciente creado' })
  create(@Body() createPatientDto: CreatePatientDto): Promise<PatientEntity> {
    return this.patientService.create(createPatientDto);
  }

  @Post('loadPatients')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOkResponse({
    type: PatientEntity,
    description: 'Paciente creado',
    isArray: true,
  })
  loadPatients(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<PatientEntity[]> {
    return this.patientService.loadPatients(file);
  }

  @Get()
  findAll() {
    return this.patientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }
}
