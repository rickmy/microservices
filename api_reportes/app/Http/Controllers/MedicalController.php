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
        $medical->identification = $request->medical['identification'];
        $medical->first_name = $request->medical['first_name'];
        $medical->second_name = $request->medical['second_name'];
        $medical->last_name = $request->medical['last_name'];
        $medical->mother_last_name = $request->medical['mother_last_name'];
        $medical->email = $request->medical['email'];
        $medical->phone = $request->medical['phone'];
        $medical->state = $request->medical['state'];
        $medical->senecyt_code = $request->medical['senecyt_code'];
       

        $medical->save();

      }  catch (\Throwable $th) {
           return response()->json([
               'message' => 'Error al crear los datos del medico',
               'error' => $th
           ]);
       }
    }


}
