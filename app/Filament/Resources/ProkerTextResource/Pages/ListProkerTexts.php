<?php

namespace App\Filament\Resources\ProkerTextResource\Pages;

use App\Filament\Resources\ProkerTextResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProkerTexts extends ListRecords
{
    protected static string $resource = ProkerTextResource::class;

    protected function getHeaderActions(): array
    {
        return [
            // Actions\CreateAction::make(),
        ];
    }
}
