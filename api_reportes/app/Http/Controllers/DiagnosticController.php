<?php

namespace App\Http\Controllers;

use App\Models\diagnostic;
use Illuminate\Http\Request;

class DiagnosticController extends Controller
{
    //

    public function createDiagnostic(Request $request)
    {
         try

        {

            $diagnostic = new diagnostic();
            $diagnostic->name = $request->name;
            $diagnostic->description = $request->description;
            $diagnostic->state = $request->state;
            $diagnostic->save();
            return response()->json([
                ['message' => 'Diagnostico creado correctamente']
            ]);

        }    catch (\Throwable $th) {
             return response()->json([
               'message' => 'Error al crear el diagnostico',
               'error' => $th
           ]);
       }
    }
}
