import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtValidate } from '../models/jwtValidate';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    //private readonly patientService: PatientsService,
    private readonly jwtService: JwtService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        '$2a$12$r8pfiCwWEGH0lavcBqcmJOYqEm.VoaUqq6VtuzKFEgaVTRFNVo1ea',
    });
  }

  async validate(payload: JwtValidate) {
    console.debug(payload);
    console.log('payload: ' + payload);
    return { userName: payload.sub, rol: payload.role };
  }
}
