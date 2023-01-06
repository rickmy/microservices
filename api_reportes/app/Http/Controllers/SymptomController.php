<?php

namespace App\Http\Controllers;

use App\Models\symptom;
use Illuminate\Http\Request;

class SymptomController extends Controller
{
    public function createSymptom(Request $request)
    {
          try

        {

            $symptom = new symptom();
            $symptom->name = $request->name;
            $symptom->description = $request->description;
            $symptom->state = $request->state;
            $symptom->save();
            return response()->json([
                ['message' => 'Sintoma creado correctamente']
            ]);

        }    catch (\Throwable $th) {
             return response()->json([
               'message' => 'Error al crear el sintoma',
               'error' => $th
           ]);

    }
  }
}
