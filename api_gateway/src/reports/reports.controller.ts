import { Controller, Get, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
@ApiTags('reportes')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Id de la cita medica' })
  @ApiOkResponse({
    description: 'reporte',
  })
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(+id);
  }
}
