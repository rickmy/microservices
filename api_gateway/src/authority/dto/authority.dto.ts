import { ApiProperty } from '@nestjs/swagger';

export class AuthorityDto {
  @ApiProperty({ example: 1, description: 'Id del permiso', readOnly: true })
  id: number;
  @ApiProperty({ example: 'admin', description: 'Nombre del permiso' })
  name: string;
  @ApiProperty({
    example: 'Get /api/user',
    description: 'Ruta para porder acceder',
  })
  endpoint: string;
}
