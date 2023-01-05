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
            $diagnostic->name = $request->diagnostic['name'];
            $diagnostic->description = $request->diagnostic['description'];
            $diagnostic->state = $request->diagnostic['state'];
            $diagnostic->save();

        }    catch (\Throwable $th) {
             return response()->json([
               'message' => 'Error al crear el diagnostico',
               'error' => $th
           ]);
       }
    }
}
