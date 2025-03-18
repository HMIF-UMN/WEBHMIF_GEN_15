<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class DivisiAnggota extends Model
{
    use HasFactory;

    protected $fillable = ['nama_divisi', 'image', 'anggota'];

    public function setImageAttribute($value)
    {
        if ($value instanceof UploadedFile) {
            $storagePath = Storage::disk('public')->put('images/divisi', $value);
            $this->attributes['image'] = Storage::disk('public')->url($storagePath);
        } else {
            $this->attributes['image'] = $value;
        }
    }

    public function getImageAttribute($value)
    {
        return $value ? Storage::disk('public')->url($value) : null;
    }
}
