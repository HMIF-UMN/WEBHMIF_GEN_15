<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use App\Models\DivisiAnggota;
use Filament\Resources\Resource;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\FileUpload;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\DivisiAnggotaResource\Pages;
use App\Filament\Resources\DivisiAnggotaResource\RelationManagers;
use App\Filament\Resources\DivisiAnggotaResource\Pages\EditDivisiAnggota;
use App\Filament\Resources\DivisiAnggotaResource\Pages\ListDivisiAnggotas;
use App\Filament\Resources\DivisiAnggotaResource\Pages\CreateDivisiAnggota;

class DivisiAnggotaResource extends Resource
{
    protected static ?string $model = DivisiAnggota::class;

    protected static ?string $navigationIcon = 'heroicon-s-users';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('nama_divisi')->required(),
                FileUpload::make('image')
                    ->required()
                    ->image()
                    ->directory('images/divisi')
                    ->disk('public'),
                TextInput::make('anggota')->required(), 
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('nama_divisi')->sortable()->searchable(),
                ImageColumn::make('image'),
                TextColumn::make('anggota')->sortable()->searchable(),
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
        return 'Divisi';
    }

    public static function getPluralLabel(): string
    {
        return 'Divisi';
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
            'index' => Pages\ListDivisiAnggotas::route('/'),
            'create' => Pages\CreateDivisiAnggota::route('/create'),
            'edit' => Pages\EditDivisiAnggota::route('/{record}/edit'),
        ];
    }
}
