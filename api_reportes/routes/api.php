<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ClinicHistoryController;
use App\Http\Controllers\TreatmentController;
use App\Http\Controllers\MedicalController;
use App\Http\Controllers\DiagnosticController;
use App\Http\Controllers\SymptomController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware()->get('/user', function (Request $request) {
    return $request->user(); */


     //Patients
     Route::prefix('patients')->group(function () {
        //ruta para obtener todos los pacientes
        Route::get('/', [PatientController::class, 'getPatients']);
        //ruta para obtener paciente por id
        Route::get('/{id}', [PatientController::class, 'getPatientById']);
        //ruta para obtener paciente por cedula de persona
        Route::get('/search/{term?}', [PatientController::class, 'searchPatientsByterm']);
        //ruta para crear paciente
        Route::post('/create', [PatientController::class, 'createPatient']);
        //ruta para actualizar paciente
        Route::put('/update/{id}', [PatientController::class, 'updatePatient']);
       //ruta para eliminar paciente
        Route::delete('/delete/{id}', [PatientController::class, 'deletePatient']);
    });

        //Medicals
     Route::prefix('medicals')->group(function () {

            //ruta para obtener todos los MEDICOS
        Route::get('/', [MedicalController::class, 'getMedicals']);
        //ruta para obtener medico por id
        Route::get('/{id}', [MedicalController::class, 'getMedicalById']);
        //ruta para obtener medico por cedula de persona
        Route::get('/search/{value}', [MedicalController::class, 'searchMedicalByCedula']);
        //ruta para crear medico
        Route::post('/create', [MedicalController::class, 'createMedical']);
        //ruta para actualizar medico
        Route::put('/update/{id}', [MedicalController::class, 'updateMedical']);
        //ruta para archivar medico
        Route::put('/archive/{id}', [MedicalController::class, 'archiveMedical']);
        //ruta para restaurar medico
        Route::put('/restore/{id}', [MedicalController::class, 'restoreMedical']);
        //ruta para eliminar medico
        Route::delete('/delete/{id}', [MedicalController::class, 'deleteMedical']);
   });

    //Clinical_histories
    Route::prefix('clinical_histories')->group(function () {

         //ruta para obtener todos los historia clinicas
        Route::get('/', [ClinicHistoryController::class, 'getClinicHistories']);
        //ruta para obtener historia clinica por id
        Route::get('/{id}', [ClinicHistoryController::class, 'getClinicHistoryById']);
        //ruta para obtener historia clinica por cedula de persona
        Route::get('/search/{value}', [ClinicHistoryController::class, 'searchClinicHistoryByCedula']);
        //ruta para crear historia clinica
        Route::post('/create', [ClinicHistoryController::class, 'createClinicHistory']);
        //ruta para actualizar historia clinica
        Route::put('/update/{id}', [ClinicHistoryController::class, 'updateClinicHistory']);
        //ruta para archivar historia clinica
        Route::put('/archive/{id}', [ClinicHistoryController::class, 'archiveClinicHistory']);
        //ruta para restaurar historia clinica
        Route::put('/restore/{id}', [ClinicHistoryController::class, 'restoreClinicHistory']);
        //ruta para eliminar historia clinica
        Route::delete('/delete/{id}', [ClinicHistoryController::class, 'deleteClinicHistory']);

     });

    //Treatments
    Route::prefix('treatments')->group(function () {
        //ruta para obtener todos los tratamientos
        Route::get('/', [TreatmentController::class, 'getTreatments']);
        //ruta para obtener tratamiento por id
        Route::get('/{id}', [TreatmentController::class, 'getTreatmentById']);
        Route::get('/search/{value}', [TreatmentController::class, 'searchTreatmentById']);
       //ruta para crear tratamiento
        Route::post('/create', [TreatmentController::class, 'createTreatment']);
       //ruta para actualizar tratamiento
         Route::put('/update/{id}', [TreatmentController::class, 'updateTreatment']);
       //ruta para archivar tratamiento
        Route::put('/archive/{id}', [TreatmentController::class, 'archiveTreatment']);
        //ruta para restaurar tratamiento
        Route::put('/restore/{id}', [TreatmentController::class, 'restoreTreatment']);
        //ruta para eliminar tratamiento
        Route::delete('/delete/{id}', [TreatmentController::class, 'deleteTreatment']);

    });

        //Diagnostics
     Route::prefix('diagnostics')->group(function () {
             //ruta para obtener todos los DIAGNOSTICOS
        Route::get('/', [DiagnosticController::class, 'getDiagnostics']);
        //ruta para obtener diagnostico por id
        Route::get('/{id}', [DiagnosticController::class, 'getDiagnosticById']);
        Route::get('/search/{value}', [DiagnosticController::class, 'searchDiagnosticById']);
        //ruta para crear diagnostico
        Route::post('/create', [DiagnosticController::class, 'createDiagnostic']);
        //ruta para actualizar diagnostico
        Route::put('/update/{id}', [DiagnosticController::class, 'updateDiagnostic']);
        //ruta para archivar diagnostico
        Route::put('/archive/{id}', [DiagnosticController::class, 'archiveDiagnostic']);
        //ruta para restaurar diagnostico
        Route::put('/restore/{id}', [DiagnosticController::class, 'restoreDiagnostic']);
        //ruta para eliminar diagnostico
        Route::delete('/delete/{id}', [DiagnosticController::class, 'deleteDiagnostic']);

    });

      //Symptoms

      Route::prefix('symptoms')->group(function () {
        //ruta para obtener todos los Symptomas
        Route::get('/', [SymptomController::class, 'getSymptoms']);
        //ruta para obtener Symptomo por id
        Route::get('/{id}', [SymptomController::class, 'getSymptomById']);
        Route::get('/search/{value}', [SymptomController::class, 'searchSymptomById']);
        //ruta para crear Symptomo
        Route::post('/create', [SymptomController::class, 'createSymptom']);
        //ruta para actualizar Symptomo
        Route::put('/update/{id}', [SymptomController::class, 'updateSymptom']);
        //ruta para archivar Symptomo
        Route::put('/archive/{id}', [SymptomController::class, 'archiveSymptom']);
        //ruta para restaurar Symptomo
        Route::put('/restore/{id}', [SymptomController::class, 'restoreSymptom']);
        //ruta para eliminar Symptomo
        Route::delete('/delete/{id}', [SymptomController::class, 'deleteSymptom']);
    });

/*
});
 */
