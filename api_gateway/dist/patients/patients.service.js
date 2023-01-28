"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let PatientsService = class PatientsService {
    constructor() {
        this.urlPatients = 'http://localhost:3000/api/patient';
    }
    async findAll() {
        const patients = await axios_1.default.get(this.urlPatients).then((response) => {
            return response.data;
        });
        return patients;
    }
    async findOne(id) {
        const patient = await axios_1.default
            .get(`${this.urlPatients}/${id}`)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            console.log(error.response.data);
            throw new common_1.UnprocessableEntityException(error.response.data.message);
        });
        return patient;
    }
    update(id, updatePatientDto) {
        return `This action updates a #${id} patient`;
    }
    remove(id) {
        return `This action removes a #${id} patient`;
    }
    getHello() {
        return 'Hello World!';
    }
    async create(patient) {
        if (!patient)
            throw new common_1.UnprocessableEntityException('Solicitud invalida');
        const newPatient = await axios_1.default
            .post(this.urlPatients, patient)
            .then((response) => {
            return response.data;
        })
            .catch((error) => {
            console.log(error.response.data);
            throw new common_1.UnprocessableEntityException(error.response.data.message);
        });
        return newPatient;
    }
};
PatientsService = __decorate([
    (0, common_1.Injectable)()
], PatientsService);
exports.PatientsService = PatientsService;
//# sourceMappingURL=patients.service.js.map