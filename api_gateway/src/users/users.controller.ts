import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    description: 'todos los usuarios',
    type: UserDto,
    isArray: true,
  })
  getAllUsers(@Headers('authorization') token: string) {
    return this.usersService.getAllUsers(token);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    description: 'información del usuario',
    type: UserDto,
  })
  findOne(@Param('id') id: string, @Headers('authorization') token: string) {
    return this.usersService.getUserById(id, token);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    description: 'elimina el usuario',
  })
  remove(@Param('id') id: string, @Headers('authorization') token: string) {
    return this.usersService.remove(+id, token);
  }
}
