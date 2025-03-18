<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Divisi extends Model
{
    use HasFactory;
    protected $table = 'divisi';
    public function pengurus()
    {
        return $this->hasMany(Pengurus::class, 'id', 'id_divisi');
    }

    public function gen(): BelongsTo
    {
        return $this->belongsTo(GenPengurus::class);
    }
}
