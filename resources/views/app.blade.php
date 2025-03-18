<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Selamat datang di website resmi HMIF UMN! Kami adalah Himpunan Mahasiswa Teknik Informatika Universitas Multimedia Nusantara, atau dikenal sebagai HMIF UMN. Sebagai organisasi yang mewadahi mahasiswa Teknik Informatika di UMN, HMIF UMN memiliki tujuan untuk mengembangkan dan meningkatkan kualitas serta kemampuan mahasiswa dalam bidang teknologi dan informatika."/>
        <meta name="keywords" content="HMIF, HMIF UMN, UMN, HMIF Gen 13, Himpunan, Himpunan Mahasiswa, Himpunan Mahasiswa Informatika, Informatika, Teknik Informatika"/>
        <meta name="author" content="HMIF UMN"/>

        <title inertia>{{ config('app.name', 'HMIF UMN') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="{{ asset('css/font.css') }}">

        <!-- Icon -->
        <link rel="shortcut icon" href="{{ asset('images/logo/Logo-IGDP.png') }}"/>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
