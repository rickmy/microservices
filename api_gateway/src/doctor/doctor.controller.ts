import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RemoveDto } from 'src/core/DTOS/remove.dto';
import { DoctorService } from './doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorDto } from './dto/doctor.dto';
import { ListDoctorDto } from './dto/list-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
@ApiTags('Doctor')
@Controller('doctor')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Lista de doctores',
    type: ListDoctorDto,
    isArray: true,
  })
  @ApiBadRequestResponse({ description: 'Error en la petición' })
  @ApiNoContentResponse({ description: 'No hay doctores' })
  @ApiUnprocessableEntityResponse({
    description: 'Error no se puede procesar su solicitud',
  })
  @UseGuards(AuthGuard)
  findAll(): Promise<ListDoctorDto[]> {
    return this.doctorService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'La información del doctor',
    type: DoctorDto,
  })
  @ApiParam({ name: 'id', description: 'Id del doctor', required: true })
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.doctorService.findOne(+id);
  }

  @Get('dni/:dni')
  @ApiOkResponse({
    description: 'La información del doctor',
    type: DoctorDto,
  })
  @ApiParam({ name: 'dni', description: 'Dni del doctor', required: true })
  @UseGuards(AuthGuard)
  findOneByDni(@Param('dni') dni: string) {
    return this.doctorService.findOneByDni(dni);
  }

  @Put(':id')
  @ApiParam({ name: 'id', description: 'Id del doctor', required: true })
  @ApiOkResponse({
    description: 'La información del doctor',
    type: DoctorDto,
  })
  @UseGuards(AuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
  ): Promise<DoctorDto> {
    return this.doctorService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'La información del doctor',
    type: RemoveDto,
  })
  @ApiParam({ name: 'id', description: 'Id del doctor', required: true })
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string): Promise<RemoveDto> {
    return this.doctorService.remove(+id);
  }
}
