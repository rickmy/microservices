<?php

namespace App\Http\Controllers;

use App\Models\patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    public function createPatient(Request $request)
    {
      try
     {

       $patient = new patient();
       $patient->identification = $request->patient['identification'];
       $patient->first_name = $request->patient['first_name'];
       $patient->second_name = $request->patient['second_name'];
       $patient->last_name = $request->patient['last_name'];
       $patient->mother_last_name = $request->patient['mother_last_name'];
       $patient->email = $request->patient['email'];
       $patient->phone = $request->patient['phone'];
       $patient->state = $request->patient['state'];
       $patient->gender = $request->patient['gender'];
       $patient->date_birth = $request->patient['date_birth'];
       $patient->save();

      }  catch (\Throwable $th) {
           return response()->json([
               'message' => 'Error al crear la historia clinica',
               'error' => $th
           ]);
       }
    }
}
