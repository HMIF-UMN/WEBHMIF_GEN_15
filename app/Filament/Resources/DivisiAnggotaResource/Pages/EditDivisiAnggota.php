<?php

namespace App\Filament\Resources\DivisiAnggotaResource\Pages;

use App\Filament\Resources\DivisiAnggotaResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditDivisiAnggota extends EditRecord
{
    protected static string $resource = DivisiAnggotaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
