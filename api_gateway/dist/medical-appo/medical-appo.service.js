"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalAppoService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let MedicalAppoService = class MedicalAppoService {
    constructor() {
        this.urlMedicalAppo = 'http://localhost:8080/api/medicalAppo/';
    }
    async findAll() {
        const informacion = await axios_1.default
            .get(this.urlMedicalAppo)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            console.log(err);
            throw new common_1.UnprocessableEntityException('Error');
        });
        return informacion;
    }
    async findOne(id) {
        return await axios_1.default
            .get(this.urlMedicalAppo + id)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            console.log(err);
            throw new common_1.UnprocessableEntityException('Existe un error aqui');
        });
    }
    async update(id, updateMedicalAppoDto) {
        const actualizar = await axios_1.default
            .put(this.urlMedicalAppo, Object.assign(Object.assign({}, updateMedicalAppoDto), { id }))
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            console.log(err);
            throw new common_1.UnprocessableEntityException('No se puede actualizar');
        });
        return actualizar;
    }
    async remove(id) {
        return await axios_1.default
            .delete(this.urlMedicalAppo + id)
            .then((res) => {
            return res.data;
        })
            .catch((err) => {
            console.log(err);
            throw new common_1.UnprocessableEntityException('Eliminado con exito');
        });
    }
    getHello() {
        return 'Bienvenidos';
    }
    async create(medicalAppo) {
        if (!medicalAppo)
            throw new common_1.UnprocessableEntityException('Solicitud denegada');
        const newDatos = await axios_1.default
            .post(this.urlMedicalAppo, medicalAppo)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            console.log(error.response.data);
            throw new common_1.UnprocessableEntityException(error.response.data.message);
        });
        return newDatos;
    }
};
MedicalAppoService = __decorate([
    (0, common_1.Injectable)()
], MedicalAppoService);
exports.MedicalAppoService = MedicalAppoService;
//# sourceMappingURL=medical-appo.service.js.map