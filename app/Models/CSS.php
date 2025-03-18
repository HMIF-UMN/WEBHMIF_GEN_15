<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CSS extends Model
{
    use HasFactory;
    protected $table = 'c_s_s';
    protected $guarded = ['id', 'created_at', 'updated_at'];
    
    public function mahasiswa()
    {
        return $this->belongsToMany(Mahasiswa::class, 'mahasiswa__c_s_s', 'css', 'mahasiswa');
    }
}
