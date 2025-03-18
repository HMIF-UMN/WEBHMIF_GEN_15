<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;
    protected $table = 'mahasiswas';
    protected $guarded = ['id', 'created_at', 'updated_at'];
    
    public function CSS()
    {
        return $this->belongsToMany(CSS::class, 'mahasiswa__c_s_s', 'mahasiswa', 'css');
    }
    
    public function group()
    {
        return $this->belongsToMany(CSSGroup::class, 'mahasiswa__c_s_s', 'mahasiswa', 'group');
    }
}
