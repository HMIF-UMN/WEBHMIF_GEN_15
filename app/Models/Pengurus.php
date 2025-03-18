<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Pengurus extends Model
{
    use HasFactory;
    protected $table = 'pengurus';
    public function divisi()
    {
        return $this->belongsTo(Divisi::class, 'id_divisi', 'id');
    }

    public function gen(): BelongsTo
    {
        return $this->belongsTo(GenPengurus::class);
    }
}
