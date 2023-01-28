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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalAppoController = void 0;
const common_1 = require("@nestjs/common");
const medical_appo_service_1 = require("./medical-appo.service");
const create_medical_appo_dto_1 = require("./dto/create-medical-appo.dto");
const update_medical_appo_dto_1 = require("./dto/update-medical-appo.dto");
const swagger_1 = require("@nestjs/swagger");
let MedicalAppoController = class MedicalAppoController {
    constructor(medicalAppoService) {
        this.medicalAppoService = medicalAppoService;
    }
    create(createMedicalAppoDto) {
        return this.medicalAppoService.create(createMedicalAppoDto);
    }
    findAll() {
        return this.medicalAppoService.findAll();
    }
    findOne(id) {
        return this.medicalAppoService.findOne(+id);
    }
    update(id, updateMedicalAppoDto) {
        return this.medicalAppoService.update(+id, updateMedicalAppoDto);
    }
    remove(id) {
        return this.medicalAppoService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_medical_appo_dto_1.CreateMedicalAppoDto]),
    __metadata("design:returntype", void 0)
], MedicalAppoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MedicalAppoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({ type: create_medical_appo_dto_1.CreateMedicalAppoDto }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalAppoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_medical_appo_dto_1.UpdateMedicalAppoDto]),
    __metadata("design:returntype", void 0)
], MedicalAppoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MedicalAppoController.prototype, "remove", null);
MedicalAppoController = __decorate([
    (0, swagger_1.ApiTags)('Citas Medicas'),
    (0, common_1.Controller)('medical-appo'),
    __metadata("design:paramtypes", [medical_appo_service_1.MedicalAppoService])
], MedicalAppoController);
exports.MedicalAppoController = MedicalAppoController;
//# sourceMappingURL=medical-appo.controller.js.map