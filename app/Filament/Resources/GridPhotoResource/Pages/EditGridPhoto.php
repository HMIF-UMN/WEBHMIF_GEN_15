<?php

namespace App\Filament\Resources\GridPhotoResource\Pages;

use App\Filament\Resources\GridPhotoResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditGridPhoto extends EditRecord
{
    protected static string $resource = GridPhotoResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
