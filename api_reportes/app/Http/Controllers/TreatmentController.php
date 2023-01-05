<?php

namespace App\Http\Controllers;

use App\Models\treatment;
use Illuminate\Http\Request;

class TreatmentController extends Controller
{
    public function createTreatment(Request $request)
    {
         try

        {

            $treatment = new treatment();
            $treatment->name = $request->treatment['name'];
            $treatment->description = $request->treatment['description'];
            $treatment->state = $request->treatment['state'];
            $treatment->save();

        }    catch (\Throwable $th) {
             return response()->json([
               'message' => 'Error al crear el treatmento',
               'error' => $th
           ]);
       }
    }

}
