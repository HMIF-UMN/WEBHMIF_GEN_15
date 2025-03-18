<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Models\HomeCarousel;
use Filament\Resources\Resource;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\HomeCarouselResource\Pages;
use App\Filament\Resources\HomeCarouselResource\RelationManagers;

class HomeCarouselResource extends Resource
{
    protected static ?string $model = HomeCarousel::class;

    protected static ?string $navigationIcon = 'heroicon-s-photo';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image')
                    ->required()
                    ->image()
                    ->directory('images/home')
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
        return 'Carousel Image';
    }

    public static function getPluralLabel(): string
    {
        return 'Carousel Image';
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
            'index' => Pages\ListHomeCarousels::route('/'),
            'create' => Pages\CreateHomeCarousel::route('/create'),
            'edit' => Pages\EditHomeCarousel::route('/{record}/edit'),
        ];
    }
}
