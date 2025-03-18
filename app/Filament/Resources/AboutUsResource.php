<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\AboutUs;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Tabs;
use Filament\Forms\Components\Tabs\Tab;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\AboutUsResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\AboutUsResource\RelationManagers;
use App\Filament\Resources\AboutUsResource\Pages\EditAboutUs;
use App\Filament\Resources\AboutUsResource\Pages\ListAboutUs;
use App\Filament\Resources\AboutUsResource\Pages\CreateAboutUs;

class AboutUsResource extends Resource
{
    protected static ?string $model = AboutUs::class;

    protected static ?string $navigationIcon = 'heroicon-s-document-text';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        TextInput::make('title1')->required(),
                        TextInput::make('title2')->required(),
                        TextInput::make('title3')->required(),
                        TextInput::make('title4')->required(),
                        TextInput::make('title5')->required(),
                    ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('title1')->sortable()->searchable(),
                TextColumn::make('title2')->sortable()->searchable(),
                TextColumn::make('title3')->sortable()->searchable(),
                TextColumn::make('title4')->sortable()->searchable(),
                TextColumn::make('title5')->sortable()->searchable(),
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

    public static function getRelations(): array
    {
        return [
            //
        ];
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
        return 'About Us';
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAboutUs::route('/'),
            'create' => Pages\CreateAboutUs::route('/create'),
            'edit' => Pages\EditAboutUs::route('/{record}/edit'),
        ];
    }

}
