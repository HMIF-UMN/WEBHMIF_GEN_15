<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'email_link', 'line', 'line_link', 'instagram', 'instagram_link', 'discord', 'discord_link'];
}
