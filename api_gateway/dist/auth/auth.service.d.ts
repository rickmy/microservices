import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginDto, TokenDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
export declare class AuthService {
    private jwtService;
    urlAuth: string;
    constructor(jwtService: JwtService);
    create(createAuthDto: CreateAuthDto): string;
    login(loginDto: LoginDto): Promise<TokenDto>;
    registerPatient(registerDto: RegisterDto, token: string): Promise<any>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
}
