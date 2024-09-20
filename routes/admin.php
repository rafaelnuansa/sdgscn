<?php

use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    // Menampilkan form login
    Route::get('login', [App\Http\Controllers\Admin\LoginController::class, 'showLoginForm'])->name('login.index');
    // Proses otentikasi login
    Route::post('login', [App\Http\Controllers\Admin\LoginController::class, 'authenticate'])->name('authenticate');
    // Proses logout
    Route::post('logout', [App\Http\Controllers\Admin\LoginController::class, 'logout'])->name('logout');
    // with middleware auth:admin
    Route::middleware('admin')->group(function () {
        Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard.index');
        
        Route::resource('articles', App\Http\Controllers\Admin\ArticleController::class)->names('articles');
        Route::resource('users', App\Http\Controllers\Admin\UserController::class)->names('users');
        Route::resource('sliders', App\Http\Controllers\Admin\SliderController::class)->names('sliders');
        Route::resource('partners', App\Http\Controllers\Admin\PartnerController::class)->names('partners');
        Route::resource('sdgs', App\Http\Controllers\Admin\SdgController::class)->names('sdgs');
        Route::resource('experts', App\Http\Controllers\Admin\ExpertController::class)->names('experts');


        Route::put('pages/{page}/restore', [App\Http\Controllers\Admin\PageController::class, 'restore'])->name('pages.restore');
        Route::delete('pages/{page}/force', [App\Http\Controllers\Admin\PageController::class, 'force'])->name('pages.force');
       
        Route::resource('pages', App\Http\Controllers\Admin\PageController::class)->names('pages');
        Route::resource('albums', App\Http\Controllers\Admin\AlbumController::class)->names('albums');
        Route::post('albums/{album}/gallery', [App\Http\Controllers\Admin\AlbumController::class, 'storeImages'])->name('albums.gallery.store');
        Route::delete('albums/gallery/{gallery}', [App\Http\Controllers\Admin\AlbumController::class, 'deleteImage'])->name('albums.gallery.destroy');
        
        Route::resource('galleries', App\Http\Controllers\Admin\AlbumController::class)->names('galleries');
        Route::resource('research', App\Http\Controllers\Admin\ResearchController::class)->names('research');

        Route::get('settings', [App\Http\Controllers\Admin\SettingController::class, 'index'])->name('settings.index');
        Route::put('settings', [App\Http\Controllers\Admin\SettingController::class, 'update'])->name('settings.update');
   
        Route::get('menus', [App\Http\Controllers\Admin\MenuController::class, 'index'])->name('menus.index');
        Route::post('menus', [App\Http\Controllers\Admin\MenuController::class, 'store'])->name('menus.store');
        Route::put('menus/{id}', [App\Http\Controllers\Admin\MenuController::class, 'update'])->name('menus.update');
        Route::delete('menus/{id}', [App\Http\Controllers\Admin\MenuController::class, 'destroy'])->name('menus.destroy');
        Route::post('menus/sort', [App\Http\Controllers\Admin\MenuController::class, 'sort'])->name('menus.sort');
        Route::get('menus/fetch', [App\Http\Controllers\Admin\MenuController::class, 'fetch'])->name('menus.fetch');
    });
});

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('profile', [App\Http\Controllers\Admin\ProfileController::class, 'index'])->name('profile.index');
    Route::put('profile/update', [App\Http\Controllers\Admin\ProfileController::class, 'updateProfile'])->name('profile.update');
    Route::put('profile/update-password', [App\Http\Controllers\Admin\ProfileController::class, 'updatePassword'])->name('profile.updatePassword');
    Route::post('profile/send-verification-email', [App\Http\Controllers\Admin\ProfileController::class, 'sendVerificationEmail'])->name('profile.sendVerificationEmail');
});

Route::post('/admin/articles/storeImage', [App\Http\Controllers\Admin\ArticleController::class, 'storeImagePost']);
