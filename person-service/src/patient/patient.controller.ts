import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import {
  ApiBody,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger/dist';
import { PatientEntity } from './entities/patient.entity';
import { Put, UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
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
  @ApiBody({
    description: 'Archivo de excel con los pacientes',
    type: 'file',
  })
  loadPatients(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<PatientEntity[]> {
    return this.patientService.loadPatients(file);
  }

  @Get()
  @ApiOkResponse({
    type: PatientEntity,
    description: 'Pacientes encontrado',
    isArray: true,
  })
  findAll(): Promise<PatientEntity[]> {
    console.log('entre');
    
    return this.patientService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PatientEntity, description: 'Paciente encontrado' })
  findOne(@Param('id') id: string) {
    return this.patientService.findOneById(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: PatientEntity, description: 'Paciente actualizado' })
  @ApiParam({ name: 'id', type: 'number' })
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<string> {
    return this.patientService.remove(+id);
  }
}
