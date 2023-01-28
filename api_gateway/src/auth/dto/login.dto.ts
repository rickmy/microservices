import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    example: 'admin',
    description: 'Username',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: '123',
    description: 'Password',
  })
  @IsString()
  password: string;
}

export class TokenDto {
  @ApiProperty({
    example: 'token',
  })
  token: string;
}
