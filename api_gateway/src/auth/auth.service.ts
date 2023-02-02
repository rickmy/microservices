import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import axios from 'axios';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto, TokenDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  urlAuth = 'http://localhost:8081';
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  async login(loginDto: LoginDto): Promise<TokenDto> {
    return await axios
      .post(
        this.urlAuth + '/login',
        {},
        {
          auth: { username: loginDto.username, password: loginDto.password },
        },
      )
      .then((response) => {
        const headerToken = response.headers.authorization;
        return {
          token: headerToken.split(' ')[1],
        };
      })
      .catch((error) => {
        throw new UnprocessableEntityException(error.response.data.message);
      });
  }

  async registerPatient(registerDto: RegisterDto, token: string): Promise<any> {
    return await axios
      .post(
        this.urlAuth + '/api/user/',
        {
          ...registerDto,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      )
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
  }

  async verifyToken(token: string, route: string): Promise<boolean> {
    console.log(route);
    return await axios
      .get(this.urlAuth + '/api/user/hasAuthority/', {
        headers: { Authorization: token, Endpoint: route },
      })
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.log(error.response.data);
        throw new UnauthorizedException('No tiene permisos para acceder');
      });
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
