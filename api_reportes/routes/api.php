<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\ClinicHistoryController;

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
        Route::get('/', [MedicalController::class, 'getMedicals'])->middleware('can:LEER_MEDICOS');
        //ruta para obtener medico por id
        Route::get('/{id}', [MedicalController::class, 'getMedicalById'])->middleware('can:LEER_MEDICOS');
        //ruta para obtener medico por cedula de persona
        Route::get('/search/{value}', [MedicalController::class, 'searchMedicalByCedula'])->middleware('can:LEER_MEDICOS');
        //ruta para crear medico
        Route::post('/create', [MedicalController::class, 'createMedical'])->middleware('can:CREAR_MEDICOS');
        //ruta para actualizar medico
        Route::put('/update/{id}', [MedicalController::class, 'updateMedical'])->middleware('can:ACTUALIZAR_MEDICOS');
        //ruta para archivar medico
        Route::put('/archive/{id}', [MedicalController::class, 'archiveMedical'])->middleware('can:ARCHIVAR_MEDICOS');
        //ruta para restaurar medico
        Route::put('/restore/{id}', [MedicalController::class, 'restoreMedical'])->middleware('can:RESTAURAR_MEDICOS');
        //ruta para eliminar medico
        Route::delete('/delete/{id}', [MedicalController::class, 'deleteMedical'])->middleware('can:ELIMINAR_MEDICOS');
   });

    //Clinical_histories
    Route::prefix('clinical_histories')->group(function () {

         //ruta para obtener todos los historia clinicas
        Route::get('/', [ClinicHistoryController::class, 'getClinicHistories'])->middleware('can:LEER_HISTORIAS_CLINICAS');
        //ruta para obtener historia clinica por id
        Route::get('/{id}', [ClinicHistoryController::class, 'getClinicHistoryById'])->middleware('can:LEER_HISTORIAS_CLINICAS');
        //ruta para obtener historia clinica por cedula de persona
        Route::get('/search/{value}', [ClinicHistoryController::class, 'searchClinicHistoryByCedula'])->middleware('can:LEER_HISTORIAS_CLINICAS');
        //ruta para crear historia clinica
        Route::post('/create', [ClinicHistoryController::class, 'createClinicHistory'])->middleware('can:CREAR_HISTORIAS_CLINICAS');
        //ruta para actualizar historia clinica
        Route::put('/update/{id}', [ClinicHistoryController::class, 'updateClinicHistory'])->middleware('can:ACTUALIZAR_HISTORIAS_CLINICAS');
        //ruta para archivar historia clinica
        Route::put('/archive/{id}', [ClinicHistoryController::class, 'archiveClinicHistory'])->middleware('can:ARCHIVAR_HISTORIAS_CLINICAS');
        //ruta para restaurar historia clinica
        Route::put('/restore/{id}', [ClinicHistoryController::class, 'restoreClinicHistory'])->middleware('can:RESTAURAR_HISTORIAS_CLINICAS');
        //ruta para eliminar historia clinica
        Route::delete('/delete/{id}', [ClinicHistoryController::class, 'deleteClinicHistory'])->middleware('can:ELIMINAR_HISTORIAS_CLINICAS');

     });

    //Treatments
    Route::prefix('treatments')->group(function () {
        //ruta para obtener todos los tratamientos
        Route::get('/', [TreatmentController::class, 'getTreatments'])->middleware('can:LEER_TREATMENTS');
        //ruta para obtener tratamiento por id
        Route::get('/{id}', [TreatmentController::class, 'getTreatmentById'])->middleware('can:LEER_TREATMENTS');
        Route::get('/search/{value}', [TreatmentController::class, 'searchTreatmentById'])->middleware('can:LEER_TRATAMIENTOS');
       //ruta para crear tratamiento
        Route::post('/create', [TreatmentController::class, 'createTreatment'])->middleware('can:CREAR_TRATAMIENTOS');
       //ruta para actualizar tratamiento
         Route::put('/update/{id}', [TreatmentController::class, 'updateTreatment'])->middleware('can:ACTUALIZAR_TRATAMIENTOS');
       //ruta para archivar tratamiento
        Route::put('/archive/{id}', [TreatmentController::class, 'archiveTreatment'])->middleware('can:ARCHIVAR_TRATAMIENTOS');
        //ruta para restaurar tratamiento
        Route::put('/restore/{id}', [TreatmentController::class, 'restoreTreatment'])->middleware('can:RESTAURAR_TRATAMIENTOS');
        //ruta para eliminar tratamiento
        Route::delete('/delete/{id}', [TreatmentController::class, 'deleteTreatment'])->middleware('can:ELIMINAR_TRATAMIENTOS');

    });

        //Diagnostics
     Route::prefix('diagnostics')->group(function () {
             //ruta para obtener todos los DIAGNOSTICOS
        Route::get('/', [DiagnosticController::class, 'getDiagnostics'])->middleware('can:LEER_DIAGNOSTICOS');
        //ruta para obtener diagnostico por id
        Route::get('/{id}', [DiagnosticController::class, 'getDiagnosticById'])->middleware('can:LEER_DIAGNOSTICOS');
        Route::get('/search/{value}', [DiagnosticController::class, 'searchDiagnosticById'])->middleware('can:LEER_DIAGNOSTICOS');
        //ruta para crear diagnostico
        Route::post('/create', [DiagnosticController::class, 'createDiagnostic'])->middleware('can:CREAR_DIAGNOSTICOS');
        //ruta para actualizar diagnostico
        Route::put('/update/{id}', [DiagnosticController::class, 'updateDiagnostic'])->middleware('can:ACTUALIZAR_DIAGNOSTICOS');
        //ruta para archivar diagnostico
        Route::put('/archive/{id}', [DiagnosticController::class, 'archiveDiagnostic'])->middleware('can:ARCHIVAR_DIAGNOSTICOS');
        //ruta para restaurar diagnostico
        Route::put('/restore/{id}', [DiagnosticController::class, 'restoreDiagnostic'])->middleware('can:RESTAURAR_DIAGNOSTICOS');
        //ruta para eliminar diagnostico
        Route::delete('/delete/{id}', [DiagnosticController::class, 'deleteDiagnostic'])->middleware('can:ELIMINAR_DIAGNOSTICOS');

    });

      //Symptoms

      Route::prefix('symptoms')->group(function () {
        //ruta para obtener todos los Symptomas
        Route::get('/', [SymptomController::class, 'getSymptoms'])->middleware('can:LEER_SINTOMAS');
        //ruta para obtener Symptomo por id
        Route::get('/{id}', [SymptomController::class, 'getSymptomById'])->middleware('can:LEER_SINTOMAS');
        Route::get('/search/{value}', [SymptomController::class, 'searchSymptomById'])->middleware('can:LEER_SINTOMAS');
        //ruta para crear Symptomo
        Route::post('/create', [SymptomController::class, 'createSymptom'])->middleware('can:CREAR_SINTOMAS');
        //ruta para actualizar Symptomo
        Route::put('/update/{id}', [SymptomController::class, 'updateSymptom'])->middleware('can:ACTUALIZAR_SINTOMAS');
        //ruta para archivar Symptomo
        Route::put('/archive/{id}', [SymptomController::class, 'archiveSymptom'])->middleware('can:ARCHIVAR_SINTOMAS');
        //ruta para restaurar Symptomo
        Route::put('/restore/{id}', [SymptomController::class, 'restoreSymptom'])->middleware('can:RESTAURAR_SINTOMAS');
        //ruta para eliminar Symptomo
        Route::delete('/delete/{id}', [SymptomController::class, 'deleteSymptom'])->middleware('can:ELIMINAR_SINTOMAS');

    });

/*
});
 */
