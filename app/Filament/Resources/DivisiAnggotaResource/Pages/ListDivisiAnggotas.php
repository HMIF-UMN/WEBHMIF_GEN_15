<?php

namespace App\Filament\Resources\DivisiAnggotaResource\Pages;

use App\Filament\Resources\DivisiAnggotaResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListDivisiAnggotas extends ListRecords
{
    protected static string $resource = DivisiAnggotaResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
