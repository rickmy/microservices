import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateRoleDto } from './dto/create-role.dto';
import { RoleDto } from './dto/role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  urlAuthRole = 'http://localhost:8081/api/role/';
  create(createRoleDto: CreateRoleDto) {
    return 'This action adds a new role';
  }

  async findAll(token: string): Promise<RoleDto[]> {
    const roles = await axios.get(this.urlAuthRole, {
      headers: { Authorization: token },
    });
    return roles.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
