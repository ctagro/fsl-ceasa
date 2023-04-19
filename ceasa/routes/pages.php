
<?php


use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/hola', function () {
    return Inertia::render('Dashboard');
})->name('hola');