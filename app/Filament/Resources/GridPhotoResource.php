<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use App\Models\GridPhoto;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\GridPhotoResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\GridPhotoResource\RelationManagers;
use App\Filament\Resources\GridPhotoResource\Pages\EditGridPhoto;
use App\Filament\Resources\GridPhotoResource\Pages\ListGridPhotos;
use App\Filament\Resources\GridPhotoResource\Pages\CreateGridPhoto;

class GridPhotoResource extends Resource
{
    protected static ?string $model = GridPhoto::class;

    protected static ?string $navigationIcon = 'heroicon-s-photo';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            FileUpload::make('image')
                ->required()
                ->image()
                ->directory('images/about')
                ->disk('public'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getLabel(): string
    {
        return 'Grid Image';
    }

    public static function getPluralLabel(): string
    {
        return 'Grid Image';
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
            'index' => Pages\ListGridPhotos::route('/'),
            'create' => Pages\CreateGridPhoto::route('/create'),
            'edit' => Pages\EditGridPhoto::route('/{record}/edit'),
        ];
    }
}
