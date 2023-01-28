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
exports.CreateMedicalAppoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateMedicalAppoDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo fecha de atencion es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El campo fecha de atencion debe ser Date' }),
    __metadata("design:type", String)
], CreateMedicalAppoDto.prototype, "attentionDate", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo observacion medica es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El campo observacion medica debe ser un string' }),
    __metadata("design:type", String)
], CreateMedicalAppoDto.prototype, "medicalObservations", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo motivo de cita debe ser un string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo motivo de cita  es requerido' }),
    __metadata("design:type", String)
], CreateMedicalAppoDto.prototype, "reasonForAppointment", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'El campo tiempo de servicio debe ser un string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo tiempo de servicio es requerido' }),
    __metadata("design:type", String)
], CreateMedicalAppoDto.prototype, "serviceTime", void 0);
exports.CreateMedicalAppoDto = CreateMedicalAppoDto;
//# sourceMappingURL=create-medical-appo.dto.js.map