<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class codeXpoRacingSimulator extends Model
{
    use HasFactory;

    protected $guarded = [
        'created_at', 'updated_at', 'id'
    ];

    protected $table = 'code_xpo_racing_sim';
}
