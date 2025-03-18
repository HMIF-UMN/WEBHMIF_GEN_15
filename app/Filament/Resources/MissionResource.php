<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Mission;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\MissionResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\MissionResource\RelationManagers;
use App\Filament\Resources\MissionResource\Pages\EditMission;
use App\Filament\Resources\MissionResource\Pages\ListMissions;
use App\Filament\Resources\MissionResource\Pages\CreateMission;

class MissionResource extends Resource
{
    protected static ?string $model = Mission::class;

    protected static ?string $navigationIcon = 'heroicon-s-trophy';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        Textarea::make('misi')->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('misi')->sortable()->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getLabel(): string
    {
        return 'Mission';
    }

    public static function getPluralLabel(): string
    {
        return 'Mission';
    }

    public static function getNavigationGroup(): ?string
    {
        return 'About Us';
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMissions::route('/'),
            'create' => Pages\CreateMission::route('/create'),
            'edit' => Pages\EditMission::route('/{record}/edit'),
        ];
    }
}
