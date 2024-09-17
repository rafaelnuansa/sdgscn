<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\HotelController;
use App\Http\Controllers\Admin\UserController;

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function () {
    // Menampilkan form login
    Route::get('login', [LoginController::class, 'showLoginForm'])->name('login.index');
    // Proses otentikasi login
    Route::post('login', [LoginController::class, 'authenticate'])->name('authenticate');
    // Proses logout
    Route::post('logout', [LoginController::class, 'logout'])->name('logout');
    // with middleware auth:admin
    Route::middleware('admin')->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard.index');


        
        Route::get('videos', [App\Http\Controllers\Admin\VideoController::class, 'index'])->name('videos.index');
        Route::get('videos/create', [App\Http\Controllers\Admin\VideoController::class, 'create'])->name('videos.create');
        Route::post('videos', [App\Http\Controllers\Admin\VideoController::class, 'store'])->name('videos.store');
        Route::get('videos/{video}/edit', [App\Http\Controllers\Admin\VideoController::class, 'edit'])->name('videos.edit');
        Route::put('videos/{video}', [App\Http\Controllers\Admin\VideoController::class, 'update'])->name('videos.update');
        Route::delete('videos/{video}', [App\Http\Controllers\Admin\VideoController::class, 'destroy'])->name('videos.destroy');


    
        Route::resource('articles', App\Http\Controllers\Admin\ArticleController::class)->names('articles');
        Route::resource('categories', CategoryController::class)->names('categories');
        Route::resource('users', UserController::class)->names('users');
        Route::resource('sliders', App\Http\Controllers\Admin\SliderController::class)->names('sliders');
        Route::resource('partners', App\Http\Controllers\Admin\PartnerController::class)->names('partners');
       
        Route::put('pages/{page}/restore', [App\Http\Controllers\Admin\PageController::class, 'restore'])->name('pages.restore');
        Route::delete('pages/{page}/force', [App\Http\Controllers\Admin\PageController::class, 'force'])->name('pages.force');
       
        Route::resource('pages', App\Http\Controllers\Admin\PageController::class)->names('pages');
        Route::resource('albums', App\Http\Controllers\Admin\AlbumController::class)->names('albums');
        Route::post('albums/{album}/gallery', [App\Http\Controllers\Admin\AlbumController::class, 'storeImages'])->name('albums.gallery.store');
        Route::delete('albums/gallery/{gallery}', [App\Http\Controllers\Admin\AlbumController::class, 'deleteImage'])->name('albums.gallery.destroy');
        
        Route::resource('galleries', App\Http\Controllers\Admin\AlbumController::class)->names('galleries');

        Route::get('settings', [App\Http\Controllers\Admin\SettingController::class, 'index'])->name('settings.index');
        Route::put('settings', [App\Http\Controllers\Admin\SettingController::class, 'update'])->name('settings.update');
        Route::get('settings/home/content', [App\Http\Controllers\Admin\HomeContentController::class, 'index'])->name('home_contents.index');
        Route::post('settings/home/content', [App\Http\Controllers\Admin\HomeContentController::class, 'update'])->name('home_contents.update');

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
