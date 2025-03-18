<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa_CSS extends Model
{
    use HasFactory;
    protected $table = 'mahasiswa__c_s_s';
    protected $guarded = ['id', 'created_at', 'updated_at'];

}
