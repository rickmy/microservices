import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({ example: 1, description: 'Id del rol', readOnly: true })
  id: number;
  @ApiProperty({ example: 'admin', description: 'Nombre del rol' })
  name: string;
  @ApiProperty({ example: 'admin', description: 'Descripción del rol' })
  enabled: boolean;
}
