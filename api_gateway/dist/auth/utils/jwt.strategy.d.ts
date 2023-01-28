import { JwtService } from '@nestjs/jwt';
import { JwtValidate } from '../models/jwtValidate';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    validate(payload: JwtValidate): Promise<{
        userName: string;
        rol: string;
    }>;
}
export {};
