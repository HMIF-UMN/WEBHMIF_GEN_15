<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Filament\Resources\ContactResource\RelationManagers;
use App\Models\Contact;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Filament\Forms\Components\Card;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-s-phone';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Card::make()
                    ->schema([
                        TextInput::make('email')->required(),
                        TextInput::make('email_link')->required(),
                        TextInput::make('line')->required(),
                        TextInput::make('line_link')->required(),
                        TextInput::make('instagram')->required(),
                        TextInput::make('instagram_link')->required(),
                        TextInput::make('discord')->required(),
                        TextInput::make('discord_link')->required(),
                    ])
                    ->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('email')->sortable()->searchable(),
                TextColumn::make('email_link')->sortable()->searchable(),
                TextColumn::make('line')->sortable()->searchable(),
                TextColumn::make('line_link')->sortable()->searchable(),
                TextColumn::make('instagram')->sortable()->searchable(),
                TextColumn::make('instagram_link')->sortable()->searchable(),
                TextColumn::make('discord')->sortable()->searchable(),
                TextColumn::make('discord_link')->sortable()->searchable(),
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
        return 'Contact';
    }

    public static function getPluralLabel(): string
    {
        return 'Contact';
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
            'index' => Pages\ListContacts::route('/'),
            'create' => Pages\CreateContact::route('/create'),
            'edit' => Pages\EditContact::route('/{record}/edit'),
        ];
    }
}
