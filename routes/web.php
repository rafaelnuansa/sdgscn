<?php

use Illuminate\Support\Facades\Route;


require __DIR__ . '/auth.php';


Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('pages', [App\Http\Controllers\PageController::class, 'index'])->name('pages.index');
Route::get('pages/{slug}', [App\Http\Controllers\PageController::class, 'show'])->name('pages.show');


Route::get('articles', [App\Http\Controllers\ArticleController::class, 'index'])->name('articles.index');
Route::get('articles/{slug}', [App\Http\Controllers\ArticleController::class, 'show'])->name('articles.show');

Route::get('videos', [App\Http\Controllers\GalleryController::class, 'videos'])->name('galleries.videos.index');
Route::get('videos/{slug}', [App\Http\Controllers\GalleryController::class, 'videoShow'])->name('galleries.videos.show');

Route::get('galleries', [App\Http\Controllers\GalleryController::class, 'index'])->name('galleries.index');
Route::get('galleries/{id}', [App\Http\Controllers\GalleryController::class, 'show'])->name('galleries.show');


Route::get('contact', [App\Http\Controllers\ContactController::class, 'index'])->name('contact.index');
Route::post('contact', [App\Http\Controllers\ContactController::class, 'store'])->name('contact.store');


Route::get('artisan-storage-link', function (){
    \Illuminate\Support\Facades\Artisan::call('storage:link');
    echo 'success';
});

require __DIR__ . '/admin.php';
