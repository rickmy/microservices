-- CreateEnum
CREATE TYPE "PatientSex" AS ENUM ('Masculino', 'Femenino', 'LGBTQ+', 'Otro');

-- CreateEnum
CREATE TYPE "CivilStatus" AS ENUM ('Soltero/a', 'Casado/a', 'Divorciado/a', 'Unión Libre');

-- CreateEnum
CREATE TYPE "PatientStatus" AS ENUM ('R', 'V', 'B', 'D');

-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "dni" VARCHAR(150),
    "firstName" VARCHAR(50),
    "middleName" VARCHAR(50),
    "firstSurname" VARCHAR(50),
    "secondSurname" VARCHAR(50),
    "sex" "PatientSex",
    "DateOfBirth" VARCHAR(10),
    "civilStatus" "CivilStatus",
    "address" VARCHAR(200),
    "phone" VARCHAR(10),
    "email" VARCHAR(255) NOT NULL,
    "disabilityId" INTEGER,
    "percentage" INTEGER DEFAULT 0,
    "status" "PatientStatus" NOT NULL DEFAULT 'R',

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctor" (
    "id" SERIAL NOT NULL,
    "dni" VARCHAR(150) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "lastName" VARCHAR(100) NOT NULL,
    "address" VARCHAR(100),
    "codeSenecyt" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "specialtyId" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialty" (
    "id" SERIAL NOT NULL,
    "specialty" VARCHAR(100) NOT NULL,
    "father" INTEGER NOT NULL,
    "iconPath" VARCHAR(255) NOT NULL DEFAULT 'outline/symbols/health_alt',
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Disability" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,

    CONSTRAINT "Disability_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DoctorHour" (
    "id" SERIAL NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "availableDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "availableHour" VARCHAR(10) NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "DoctorHour_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Patient_dni_key" ON "Patient"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Patient_email_key" ON "Patient"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patientId" ON "Patient"("email", "dni");

-- CreateIndex
CREATE UNIQUE INDEX "dni" ON "Doctor"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "codeSenecyt" ON "Doctor"("codeSenecyt");

-- CreateIndex
CREATE UNIQUE INDEX "email" ON "Doctor"("email");

-- AddForeignKey
ALTER TABLE "Patient" ADD CONSTRAINT "Patient_disabilityId_fkey" FOREIGN KEY ("disabilityId") REFERENCES "Disability"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doctor" ADD CONSTRAINT "Doctor_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DoctorHour" ADD CONSTRAINT "DoctorHour_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
