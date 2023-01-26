import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'username', description: 'Username', required: true })
  @IsString({ message: 'Username must be a string' })
  @IsNotEmpty({ message: 'Username must not be empty' })
  username: string;
  @ApiProperty({ example: 'name', description: 'name', required: true })
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name must not be empty' })
  name: string;
  @ApiProperty({ example: 'password', description: 'password', required: true })
  @IsString({ message: 'Password must be a string' })
  @MinLength(6)
  password: string;
  @ApiProperty({
    example: 'roles',
    description: '[{id:1}]',
    isArray: true,
    required: true,
  })
  @IsArray({ message: 'Roles must be an array' })
  @IsNotEmpty({ message: 'Roles must not be empty' })
  roles: RolDto[];
}

export class RolDto {
  @IsNumber({}, { message: 'Id must be a number' })
  id: number;
}
