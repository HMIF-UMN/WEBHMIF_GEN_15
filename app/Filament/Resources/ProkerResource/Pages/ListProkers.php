<?php

namespace App\Filament\Resources\ProkerResource\Pages;

use App\Filament\Resources\ProkerResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListProkers extends ListRecords
{
    protected static string $resource = ProkerResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
