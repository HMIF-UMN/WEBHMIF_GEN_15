<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\ProkerText;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Pages\Actions\EditAction;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ProkerTextResource\Pages;
use App\Filament\Resources\ProkerTextResource\RelationManagers;
use App\Filament\Resources\ProkerTextResource\Pages\EditProkerText;
use App\Filament\Resources\ProkerTextResource\Pages\ListProkerTexts;
use App\Filament\Resources\ProkerTextResource\Pages\CreateProkerText;

class ProkerTextResource extends Resource
{
    protected static ?string $model = ProkerText::class;

    protected static ?string $navigationIcon = 'heroicon-s-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Textarea::make('description'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('description'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                // Tables\Actions\BulkActionGroup::make([
                //     Tables\Actions\DeleteBulkAction::make(),
                // ]),
            ]);
    }

    public static function getLabel(): string
    {
        return 'Wordingan';
    }

    public static function getPluralLabel(): string
    {
        return 'Wordingan';
    }

    public static function getNavigationGroup(): ?string
    {
        return 'Proker';
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
            'index' => Pages\ListProkerTexts::route('/'),
            'create' => Pages\CreateProkerText::route('/create'),
            'edit' => Pages\EditProkerText::route('/{record}/edit'),
        ];
    }
}
