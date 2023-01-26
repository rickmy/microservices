import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
<<<<<<< HEAD
=======
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
>>>>>>> da13fc567a1b9d57a9b374b431766d358aadd02f
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto, TokenDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
<<<<<<< HEAD
import { ApiTags } from '@nestjs/swagger/dist';

@ApiTags('Autenticacion y Autorización')
=======
@ApiTags('Autorización')
>>>>>>> da13fc567a1b9d57a9b374b431766d358aadd02f
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  @ApiOkResponse({ type: TokenDto })
  login(@Body() login: LoginDto): Promise<TokenDto> {
    return this.authService.login(login);
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
