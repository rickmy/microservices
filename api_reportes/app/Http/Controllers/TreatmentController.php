<?php

namespace App\Http\Controllers;

use App\Models\treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    public function createTreatment(Request $request)
    {
         try

        {   $treatment = new treatment();
            $treatment->name = $request->name;
            $treatment->description = $request->description;
            $treatment->state = $request->state;
            $treatment->save();
            return response()->json([
                ['message' => 'Tratamiento creado correctamente']
            ]);
            
        }    catch (\Throwable $th) {
             return response()->json([
               'message' => 'Error al crear el treatmento',
               'error' => $th
           ]);
       }
    }

}
