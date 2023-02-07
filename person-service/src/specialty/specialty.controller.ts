import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { CreateSpecialtyDto } from './dto/create-specialty.dto';
import { UpdateSpecialtyDto } from './dto/update-specialty.dto';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { SpecialtyEntity } from './entities/specialty.entity';
import { RemoveDto } from 'src/core/DTOS/remove.dto';
@ApiTags('Especialidades')
@Controller('specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Post()
  @ApiOkResponse({
    description: 'Especialidad creada',
    type: CreateSpecialtyDto,
  })
  create(@Body() createSpecialtyDto: CreateSpecialtyDto) {
    return this.specialtyService.create(createSpecialtyDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Lista de especialidades',
    type: [SpecialtyEntity],
  })
  findAll() {
    return this.specialtyService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Informacion de la especialidad encontrada',
    type: SpecialtyEntity,
  })
  @ApiParam({
    name: 'id',
    description: 'Id de la especialidad',
    type: Number,
    required: true,
  })
  findOne(@Param('id') id: string) {
    return this.specialtyService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({
    description: 'Especialidad actualizada',
    type: UpdateSpecialtyDto,
  })
  @ApiParam({
    name: 'id',
    description: 'Id de la especialidad',
    type: Number,
    required: true,
  })
  update(
    @Param('id') id: string,
    @Body() updateSpecialtyDto: UpdateSpecialtyDto,
  ) {
    return this.specialtyService.update(+id, updateSpecialtyDto);
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'Especialidad eliminada',
    type: RemoveDto,
  })
  @ApiParam({
    name: 'id',
    description: 'Id de la especialidad',
    type: Number,
    required: true,
  })
  remove(@Param('id') id: string) {
    return this.specialtyService.remove(+id);
  }
}
