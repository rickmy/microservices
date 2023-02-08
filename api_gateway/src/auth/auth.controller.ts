import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto, TokenDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger/dist';
import { RegisterDto } from './dto/register.dto';
import { Headers, Request, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from './guards/auth.guard';

@ApiTags('Autenticacion y Autorización')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  @ApiOkResponse({ type: TokenDto })
  @ApiBadRequestResponse({ description: 'Invalid credentials', status: 422 })
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
