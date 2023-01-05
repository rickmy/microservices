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
            $symptom->name = $request->symptom['name'];
            $symptom->description = $request->symptom['description'];
            $symptom->state = $request->symptom['state'];
            $symptom->save();

        }    catch (\Throwable $th) {
             return response()->json([
               'message' => 'Error al crear el symptomo',
               'error' => $th
           ]);
       }
    }
}
