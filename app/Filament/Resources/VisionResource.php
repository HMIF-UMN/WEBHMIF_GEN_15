<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Vision;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Card;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\VisionResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\VisionResource\Pages\EditVision;
use App\Filament\Resources\VisionResource\RelationManagers;
use App\Filament\Resources\VisionResource\Pages\ListVisions;
use App\Filament\Resources\VisionResource\Pages\CreateVision;

class VisionResource extends Resource
{
    protected static ?string $model = Vision::class;

    protected static ?string $navigationIcon = 'heroicon-s-star';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        TextInput::make('visi')->required(),
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('visi')->sortable()->searchable(),
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
        return 'Vision';
    }

    public static function getPluralLabel(): string
    {
        return 'Vision';
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
            'index' => Pages\ListVisions::route('/'),
            'create' => Pages\CreateVision::route('/create'),
            'edit' => Pages\EditVision::route('/{record}/edit'),
        ];
    }
}
