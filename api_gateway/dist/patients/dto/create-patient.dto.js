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
exports.CreatePatientDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePatientDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: '12345678', description: 'DNI del paciente' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo dni es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El campo dni debe ser un string' }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "dni", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo nombre es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El campo nombre debe ser un string' }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'El campo segundo nombre es opcional' }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "middleName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo apellido es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El campo apellido debe ser un string' }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "firstSurname", void 0);
__decorate([
    (0, class_validator_1.IsOptional)({ message: 'El campo segundo apellido es opcional' }),
    (0, class_validator_1.IsString)({ message: 'El campo segundo apellido debe ser un string' }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "secondSurname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo email es requerido' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El campo email debe ser un email' }),
    __metadata("design:type", String)
], CreatePatientDto.prototype, "email", void 0);
exports.CreatePatientDto = CreatePatientDto;
//# sourceMappingURL=create-patient.dto.js.map