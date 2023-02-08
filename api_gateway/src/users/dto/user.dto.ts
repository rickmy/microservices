import { ApiProperty } from '@nestjs/swagger';
import { AuthorityDto } from 'src/authority/dto/authority.dto';
import { RoleDto } from 'src/role/dto/role.dto';

export class UserDto {
  @ApiProperty({ example: 1, description: 'Id del usuario', readOnly: true })
  id: number;
  @ApiProperty({ example: 'admin', description: 'Nombre del usuario' })
  name: string;
  @ApiProperty({ example: 'admin', description: 'Nombre de usuario - email' })
  username: string;
  looked: boolean;
  expired: boolean;
  enabled: boolean;
  @ApiProperty({ example: [RoleDto], description: 'roles', isArray: true })
  roles: RoleDto[];
  @ApiProperty({
    example: [AuthorityDto],
    description: 'permisos',
    isArray: true,
  })
  @ApiProperty({
    example: [AuthorityDto],
    description: 'permisos',
    isArray: true,
  })
  authorities: AuthorityDto[];
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
}
