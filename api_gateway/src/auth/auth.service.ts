import { Injectable, UnprocessableEntityException } from '@nestjs/common';
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
        console.log(error.response.data);
        throw new UnprocessableEntityException(error.response.data.message);
      });
  }

  async registerPatient(registerDto: RegisterDto, token: string): Promise<any> {
    console.log(registerDto);
    if (!token) {
      throw new UnprocessableEntityException('Token is required');
    }
    /* const token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0NjcxMjUwNywicm9sIjoiUk9MRV9BRE1JTiJ9.g5XvoUaWDFx-pPHnxUx7BtCaRnlFf_ogvE1ovcr9eXGqaOSuo_zZ6LT2UE1eXAMNXpwGX3-udIzthjfxQvvodg'; */
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
