<?php

namespace App\Http\Controllers;

use App\Models\patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{

    public function getPatients(){

        $patients = patient::all();
        return response()->json($patients);
    }

    public function getPatientById($id){

        $patient = patient::find($id);
        return response()->json($patient);
    }

    public function searchPatientsByterm($term =''){
        $patients = patient::where(function($query) use($term){
         $query->where('identification','like','%'.$term.'%')
               ->orWhere('first_name','like','%'.$term.'%')
               ->orWhere('second_name','like','%'.$term.'%')
               ->orWhere('last_name','like','%'.$term.'%')
               ->orWhere('mother_last_name','like','%'.$term.'%')
               ->orWhere('email','like','%'.$term.'%')
               ->orWhere('phone','like','%'.$term.'%')
               ->orWhere('home_adress','like','%'.$term.'%')
               ->orWhere('gender','like','%'.$term.'%')
               ->orWhere('date_birth','like','%'.$term.'%');

           })->get();

           return response()->json($patients);

    }



    public function createPatient(Request $request)
    {
       try
     {



    $patient = new patient();
       $patient->identification = $request->identification;
       $patient->first_name = $request->first_name;
       $patient->second_name = $request->second_name;
       $patient->last_name = $request->last_name;
       $patient->mother_last_name = $request->mother_last_name;
       $patient->email = $request->email;
       $patient->home_adress = $request->home_adress;
       $patient->phone = $request->phone;
       $patient->state = $request->state;
       $patient->gender = $request->gender;
       $patient->date_birth = $request->date_birth;
       $patient->save();
       return response()->json([
        ['message' => 'Paciente creado correctamente']

    ]);

      }  catch (\Throwable $th) {
           return response()->json([
               'message' => 'Error al crear paciente',
               'error' => $th
           ]);
       }
    }

    public function updatePatient(Request $request, $id){


        try {
              $patient = patient::find($id);

            if (!empty($request->identification)) {
              $patient->identification= $request->identification;
             }

             if (!empty($request->first_name)) {
                $patient->first_name = $request->first_name;
            }
            if (!empty($request->second_name)) {
                $patient->second_name = $request->second_name;
            }
            if (!empty($request->last_name)) {
                $patient->last_name = $request->last_name;
            }
            if (!empty($request->mother_last_name)) {
                $patient->mother_last_name = $request->mother_last_name;
            }
            if (!empty($request->email)) {
                $patient->email = $request->email;
            }
            if (!empty($request->home_adress)) {
                $patient->home_adress = $request->home_adress;
            }
            if (!empty($request->phone)) {
                $patient->phone = $request->phone;
            }
            if (!empty($request->state)) {
                $patient->state = $request->state;
            }
            if (!empty($request->gender)) {
                $patient->gender = $request->gender;
            }
            if (!empty($request->date_birth)) {
                $patient->date_birth = $request->date_birth;
            }


            $patient->save();

            return response()->json(['message'=>'Paciente actualizado correctamente']);

        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al actualizar el paciente',
                'error' => $th
            ]);
        }

    }

       public function deletePatient(Request $request, $id){
         try {

            $patient = patient::find($id);
            if ($patient === null) {
               return response()->json(['message'=>'Paciente no encontrado']);
            }
            $patient->delete();
            return response()->json(['message'=>'Paciente eliminado correctamente']);

         }catch (\Throwable $th) {
            return response()->json([
                'message' => 'Error al eliminar  el paciente',
                'error' => $th
            ]);
        }

       }
}
