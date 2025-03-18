<?php

namespace App\Filament\Resources;

use Filament\Forms;
use Filament\Tables;
use App\Models\Proker;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Toggle;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\ImageColumn;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Tables\Columns\ToggleColumn;
use Illuminate\Database\Eloquent\Builder;
use Filament\Tables\Actions\BulkActionGroup;
use Filament\Tables\Actions\DeleteBulkAction;
use App\Filament\Resources\ProkerResource\Pages;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use App\Filament\Resources\ProkerResource\Pages\EditProker;
use App\Filament\Resources\ProkerResource\RelationManagers;
use App\Filament\Resources\ProkerResource\Pages\ListProkers;
use App\Filament\Resources\ProkerResource\Pages\CreateProker;

class ProkerResource extends Resource
{
    protected static ?string $model = Proker::class;

    protected static ?string $navigationIcon = 'heroicon-s-building-office-2';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('nama')
                ->required(),
                TextInput::make('tanggal')
                ->required(),
                TextInput::make('deskripsi'),
                FileUpload::make('logo')
                    ->required()
                    ->image()
                    ->directory('images/proker')
                    ->disk('public'),
                Toggle::make('isFinished')
                    ->inline(false)
                    ->required(),
            ]);
    }

    // protected $fillable = ['nama', 'tanggal', 'deskripsi', 'logo'];
    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('nama')->sortable()->searchable(),
                TextColumn::make('deskripsi')->sortable()->searchable(),
                TextColumn::make('tanggal')->sortable()->searchable(),
                ImageColumn::make('logo'),
                ToggleColumn::make('isFinished')->sortable()->searchable(),
                //created_at
                TextColumn::make('created_at')
                    ->dateTime('d/m/y H:i'),
                //modified_at
                TextColumn::make('updated_at')
                    ->dateTime('d/m/y H:i'),
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
        return 'List Proker';
    }

    public static function getPluralLabel(): string
    {
        return 'Proker';
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
            'index' => Pages\ListProkers::route('/'),
            'create' => Pages\CreateProker::route('/create'),
            'edit' => Pages\EditProker::route('/{record}/edit'),
        ];
    }
}
