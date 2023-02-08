import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'admin', description: 'Nombre de usuario' })
  username: string;
  @ApiProperty({ example: 'admin', description: 'Contraseña' })
  password: string;
  @ApiProperty({ example: 'admin', description: 'Nombre' })
  name: string;
  @ApiProperty({ example: 2, description: 'rol' })
  role: number;
}
