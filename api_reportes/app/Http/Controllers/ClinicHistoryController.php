<?php

namespace App\Http\Controllers;

use App\Models\clinic_history;
use Illuminate\Http\Request;

class ClinicHistoryController extends Controller
{
     //funcion para obtener todos los pacienetes
     public function getClinicHistories()
     {
         //obtener la histortria clinica y no archivados excepto el paciente logueado y el paciente admin
         $histories = clinic_history::all();

        //devolver historias
         return response()->json($histories);
     }

     public function getClinicHistoryById($id){

        $history = clinic_history::find($id);
        return response()->json($history);
    }


     public function createClinicHistory(Request $request)
     {
       try  {

            $history = new clinic_history();
            $history->attention_date = $request->attention_date;
            $history->attention_hour = $request->attention_hour;
            $history->appointment_reason = $request->appointment_reason;
            $history->diagnostic_id = $request->diagnostic_id;
            $history->medical_observation = $request->medical_observation;
            $history->patient_id = $request->patient_id;
            $history->medical_id = $request->medical_id;
            $history->symptom_id = $request->symptom_id;
            $history->diagnostic_id = $request->diagnostic_id;
            $history->treatment_id = $request->treatment_id;
            $history->save();
            return response()->json([
                ['message' => 'Historia Clinica Creada Correctamente',]

            ]);

       }  catch (\Throwable $th) {
            return response()->json([
                ['message' => 'Error al crear la historia clinica',
                'error' => $th]
            ]);
        }
     }

        public function updateClinicHistory(Request $request, $id){


            try {
                  $history = clinic_history::find($id);

                if (!empty($request->attention_date)) {
                  $history->attention_date= $request->attention_date;
                 }

                 if (!empty($request->attention_hour)) {
                    $history->attention_hour = $request->attention_hour;
                }
                if (!empty($request->appointment_reason)) {
                    $history->appointment_reason = $request->appointment_reason;
                }
                if (!empty($request->state)) {
                    $history->state = $request->state;
                }
                if (!empty($request->medical_observation)) {
                    $history->medical_observation = $request->medical_observation;
                }
                if (!empty($request->patient_id)) {
                    $history->patient_id = $request->patient_id;
                }
                if (!empty($request->medical_id)) {
                    $history->medical_id = $request->medical_id;
                }
                if (!empty($request->symptom_id)) {
                    $history->symptom_id = $request->symptom_id;
                }
                if (!empty($request->diagnostic_id)) {
                    $history->diagnostic_id = $request->diagnostic_id;
                }
                if (!empty($request->treatment_id)) {
                    $history->treatment_id = $request->treatment_id;
                }



                $history->save();

                return response()->json(['message'=>'Historia Clinica  actualizada correctamente']);

            } catch (\Throwable $th) {
                return response()->json([
                    'message' => 'Error al actualizar la historia clinica',
                    'error' => $th
                ]);
            }

        }



        public function deleteClinicHistory(Request $request, $id){
            try {

               $history = clinic_history::find($id);
               if ($history === null) {
                  return response()->json(['message'=>'Historia no encontrada']);
               }
               $history->delete();
               return response()->json(['message'=>'Historia eliminada correctamente']);

            }catch (\Throwable $th) {
               return response()->json([
                   'message' => 'Error al eliminar la historia',
                   'error' => $th
               ]);
           }

          }
}
