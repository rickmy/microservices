import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  urlAuthUser = 'http://localhost:8081/api/user/';
  async getAllUsers(token: string) {
    const users = await axios.get(this.urlAuthUser, {
      headers: { Authorization: token },
    });
    return users.data;
  }

  async getUserById(id: string, token: string) {
    const user = await axios.get(this.urlAuthUser + id + '/', {
      headers: { Authorization: token },
    });
    return user.data;
  }

  async remove(id: number, token: string) {
    const response = await axios.delete(this.urlAuthUser + id + '/', {
      headers: { Authorization: token },
    });
    return response.data;
  }
}
