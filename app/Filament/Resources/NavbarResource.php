<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Navbar;
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
use App\Filament\Resources\NavbarResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\NavbarResource\Pages\EditNavbar;
use App\Filament\Resources\NavbarResource\RelationManagers;
use App\Filament\Resources\NavbarResource\Pages\ListNavbars;
use App\Filament\Resources\NavbarResource\Pages\CreateNavbar;

class NavbarResource extends Resource
{
    protected static ?string $model = Navbar::class;

    protected static ?string $navigationIcon = 'heroicon-s-tag';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        TextInput::make('name'),
                        TextInput::make('link'),
                    ])
                    ->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name'),
                TextColumn::make('link'),
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
        return 'Button Navbar';
    }

    public static function getPluralLabel(): string
    {
        return 'Button Navbar';
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
            'index' => Pages\ListNavbars::route('/'),
            'create' => Pages\CreateNavbar::route('/create'),
            'edit' => Pages\EditNavbar::route('/{record}/edit'),
        ];
    }
}
