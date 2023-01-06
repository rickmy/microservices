<?php

namespace App\Http\Controllers;

use App\Models\medical;
use Illuminate\Http\Request;

class MedicalController extends Controller
{
    public function createMedical(Request $request)
    {
      try

      {

        $medical = new medical();
        $medical->identification = $request->identification;
        $medical->first_name = $request->first_name;
        $medical->second_name = $request->second_name;
        $medical->last_name = $request->last_name;
        $medical->mother_last_name = $request->mother_last_name;
        $medical->email = $request->email;
        $medical->state = $request->state;
        $medical->senecyt_code = $request->senecyt_code;


        $medical->save();
        return response()->json([
            'message' => 'Medico creado  correctamente',

        ]);
      }  catch (\Throwable $th) {
           return response()->json([
               'message' => 'Error al crear los datos del medico',
               'error' => $th
           ]);
       }
    }


}
