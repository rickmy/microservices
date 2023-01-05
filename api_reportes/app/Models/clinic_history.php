<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class clinic_history extends Model
{

    protected $fillable = [
        'patient_id',
        'medical_id',
        'diagnostic_id',
        'treatment_id',
        'attention_date',
        'attention_hour',
        'appointment_reason',
        'medical_observation',
        'state'
    ];
    use HasFactory;

    public function patients()
    {
        return $this->hasMany(patient::class);
    }

    public function medicals()
    {
        return $this->hasMany(medical::class);
    }

    public function diagnostic()
    {
        return $this->hasMany(diagnostic::class);
    }

    public function treatments()
    {
        return $this->hasMany(treatment::class);
    }

}
