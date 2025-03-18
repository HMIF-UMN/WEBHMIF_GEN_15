<?php

namespace App\Filament\Resources;

use Filament\Forms;
use App\Models\Home;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Card;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\HomeResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\HomeResource\RelationManagers;

class HomeResource extends Resource
{
    protected static ?string $model = Home::class;

    protected static ?string $navigationIcon = 'heroicon-s-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        TextInput::make('titleWhite')->required(),
                        TextInput::make('titleBlue')->required(),
                        TextInput::make('description')->required(),
                        TextInput::make('taglineUpper')->required(),
                        TextInput::make('taglineBottom')->required(),
                        TextInput::make('tagDesc')->required(),
                    ])
                    ->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('titleWhite')->sortable()->searchable(),
                TextColumn::make('titleBlue')->sortable()->searchable(),
                TextColumn::make('description')->sortable()->searchable(),
                TextColumn::make('taglineUpper')->sortable()->searchable(),
                TextColumn::make('taglineBottom')->sortable()->searchable(),
                TextColumn::make('tagDesc')->sortable()->searchable(),
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
        return 'Home';
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
            'index' => Pages\ListHomes::route('/'),
            'create' => Pages\CreateHome::route('/create'),
            'edit' => Pages\EditHome::route('/{record}/edit'),
        ];
    }
}
