"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const axios_1 = require("axios");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
        this.urlAuth = 'http://localhost:8081';
    }
    create(createAuthDto) {
        return 'This action adds a new auth';
    }
    async login(loginDto) {
        return await axios_1.default
            .post(this.urlAuth + '/login', {}, {
            auth: { username: loginDto.username, password: loginDto.password },
        })
            .then((response) => {
            const headerToken = response.headers.authorization;
            return {
                token: headerToken.split(' ')[1],
            };
        })
            .catch((error) => {
            console.log(error.response.data);
            throw new common_1.UnprocessableEntityException(error.response.data.message);
        });
    }
    async registerPatient(registerDto, token) {
        console.log(registerDto);
        if (!token) {
            throw new common_1.UnprocessableEntityException('Token is required');
        }
        return await axios_1.default
            .post(this.urlAuth + '/api/user/', Object.assign({}, registerDto), {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            console.log(error.response.data);
            throw new common_1.UnprocessableEntityException(error.response.data.message);
        });
    }
    findAll() {
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map