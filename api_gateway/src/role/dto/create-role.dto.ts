import { ApiProperty } from '@nestjs/swagger';
export class CreateRoleDto {
  @ApiProperty({ example: 'admin', description: 'Nombre del rol' })
  name: string;
  @ApiProperty({ example: [1, 2, 3], description: 'Lista de permisos' })
  authorities: number[];
}
