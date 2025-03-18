<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Forms\Components\Toggle;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;


class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-s-user-circle';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            //name
            TextInput::make('name')
                ->required()
                ->maxLength(255),
            //email
            TextInput::make('email')
                ->email()
                ->required()
                ->maxLength(255),
            //is_admin
            Toggle::make('is_admin')
                ->inline(false)
                ->required(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
        ->columns([
            //name
            TextColumn::make('name'),
            //email
            TextColumn::make('email'),
            //is_admin
            ToggleColumn::make('is_admin'),
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
            Tables\Actions\DeleteBulkAction::make(),
        ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageUsers::route('/'),
        ];
    }
}
