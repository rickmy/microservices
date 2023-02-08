import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService, AuthService],
})
export class RoleModule {}
