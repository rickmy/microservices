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
         $histories = clinic_history::where()->get();

        //devolver historias
         return response()->json($histories);
     }

     public function getClinicHistoryById($id)
     {
         //obtener paciente por id activo y no archivado excepto el paciente logueado y el paciente admin
         $history = clinic_history::where('id', $id)
            ->first();
         //verificar si existe el paciente
         if (!$history) {
             return response()->json([
                 'message' => 'Historia no eencontrada'
             ]);
         }

         return response()->json($history);
     }

     public function createClinicHistory(Request $request)
     {
       try  {

            $history = new clinic_history();
            $history->attention_date = $request->history['attention_date'];
            $history->attention_hour = $request->history['attention_hour'];
            $history->appointment_reason = $request->history['appointment_reason'];
            $history->state = $request->history['state'];

            $history->medical_observation = $request->history['medical_observation'];
            $history->patient_id = $request->history['patient_id']['id'];
            $history->symptom_id = $request->history['symptom_id']['id'];
            $history->diagnostic_id = $request->history['diagnostic_id']['id'];
            $history->treatment_id = $request->history['treatment_id']['id'];

        $history->save();

       }  catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al crear la historia clinica',
                'error' => $th
            ]);
        }
     }


        //funcion para eliminar una historia clinica por id
        public function deleteClinicHistory($id)
        {
            //obtener paciente por id
            $history = clinic_history::find($id);
            //verificar si existe el paciente
            if (!$history) {
                return response()->json([
                    'message' => 'historia clinica  no encontrada'
                ]);
            }
            //eliminar paciente
            $history->delete();
            //devolver paciente
            return response()->json(['history' => $history]);
        }
}
