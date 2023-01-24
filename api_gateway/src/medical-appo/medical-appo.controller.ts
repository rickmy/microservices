import { Controller, Get, Post, Body, Patch, Param, Delete, } from '@nestjs/common';
import { MedicalAppoService } from './medical-appo.service';
import { CreateMedicalAppoDto } from './dto/create-medical-appo.dto';
import { UpdateMedicalAppoDto } from './dto/update-medical-appo.dto';
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Citas Medicas')
@Controller('medical-appo')
export class MedicalAppoController {
  constructor(private readonly medicalAppoService: MedicalAppoService) {}
  @Post()
  create(@Body() createMedicalAppoDto: CreateMedicalAppoDto) {
    return this.medicalAppoService.create(createMedicalAppoDto);
  }
  @Get()
  findAll() {
    return this.medicalAppoService.findAll();
  }
  @Get(':id')
  @ApiOkResponse({type:CreateMedicalAppoDto})
  findOne(@Param('id') id: string) {
    return this.medicalAppoService.findOne(+id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMedicalAppoDto: UpdateMedicalAppoDto,
  ) {
    return this.medicalAppoService.update(+id, updateMedicalAppoDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalAppoService.remove(+id);
  }
}
