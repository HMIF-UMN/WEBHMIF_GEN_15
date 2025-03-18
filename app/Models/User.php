<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Filament\Models\Contracts\FilamentUser;
use Filament\Panel;

class User extends Authenticatable implements FilamentUser
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Determine if the user can access the Filament admin panel.
     *
     * @param Filament\Panel $panel
     * @return bool
     */
    public function canAccessPanel(Panel $panel): bool
    {
        // Define your logic here. Example:
        // Allow access only for admin users
        return $this->is_admin === 1;
    }

    /**
     * Determine if the user can access the Filament resources.
     *
     * @return bool
     */
    public function canAccessFilament(): bool
    {
        // Example: Allow access only for users with university email
        return str_ends_with($this->email, '@umn.ac.id');
    }
}
