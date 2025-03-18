<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class loginLogs extends Model
{
    use HasFactory;
    protected $table = 'login_logs';

    protected $fillable = [
        'email',
        'ip',
        'status',
    ];
}
