<?php

namespace App\Filament\Resources\ProkerTextResource\Pages;

use App\Filament\Resources\ProkerTextResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditProkerText extends EditRecord
{
    protected static string $resource = ProkerTextResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // Actions\DeleteAction::make(),
        ];
    }
}
