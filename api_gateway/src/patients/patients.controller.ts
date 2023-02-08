/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger/dist';
import {
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { PatientDto } from './dto/patient.dt';
import { RemoveDto } from 'src/core/DTOS/remove.dto';
import { PatientsService } from './patients.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@ApiTags('Pacientes')
@Controller('patients')
export class PatientsController {
  constructor(private readonly patientService: PatientsService) {}

  @Post()
  @ApiOkResponse({ type: PatientDto, description: 'Paciente creado' })
  @UseGuards(AuthGuard)
  create(@Body() createPatientDto: CreatePatientDto): Promise<PatientDto> {
    return this.patientService.create(createPatientDto);
  }

  @Post('loadPatients')
  @UseInterceptors(FileInterceptor('file'))
  @ApiOkResponse({
    type: PatientDto,
    description: 'Paciente creado',
    isArray: true,
  })
  @ApiBody({
    description: 'Archivo de excel con los pacientes',
    type: 'file',
  })
  @UseGuards(AuthGuard)
  loadPatients(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<PatientDto[]> {
    return this.patientService.loadPatients(file);
  }

  @Get()
  @ApiOkResponse({
    type: PatientDto,
    description: 'Pacientes encontrado',
    isArray: true,
  })
  @UseGuards(AuthGuard)
  findAll(): Promise<PatientDto[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: PatientDto, description: 'Paciente encontrado' })
  @ApiBadRequestResponse({ description: 'Paciente no encontrado' })
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: PatientDto, description: 'Paciente actualizado' })
  @ApiParam({ name: 'id', type: 'number' })
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: RemoveDto, description: 'Paciente eliminado' })
  @ApiParam({ name: 'id', type: 'number', required: true })
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string): Promise<RemoveDto> {
    return this.patientService.remove(+id);
  }
}
