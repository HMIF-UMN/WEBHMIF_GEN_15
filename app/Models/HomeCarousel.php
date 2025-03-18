<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class HomeCarousel extends Model
{
    use HasFactory;

    protected $fillable = ['image'];

    public function setImageAttribute($value)
    {
        if ($value instanceof UploadedFile) {
            $storagePath = Storage::disk('public')->put('images/home', $value);
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
