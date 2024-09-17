<?php

use Illuminate\Support\Facades\Route;

Route::post('/callback', [\App\Http\Controllers\Api\CallbackController::class, 'index'])->name('callback');


Route::post('/editor', action: [App\Http\Controllers\Api\Public\EditorController::class, 'store']);
Route::get('/editor', action: [App\Http\Controllers\Api\Public\EditorController::class, 'fetch']);