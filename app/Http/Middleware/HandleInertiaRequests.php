<?php

namespace App\Http\Middleware;

use App\Http\Resources\AuthAdminResource;
use App\Http\Resources\AuthenticatedUserResource;
use App\Http\Resources\AuthResource;
use App\Models\Category;
use App\Models\Menu;
use App\Models\Setting;
use Dotenv\Dotenv;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $dotenv = Dotenv::createImmutable(base_path());
        $dotenv->load();
        $menus_categories = Category::latest()->get();
        $web_menus = Menu::with('children')
        ->whereNull('parent_id')
        
        ->orderBy('order', 'asc')
        ->get();
        $web_setting = Setting::first() ?? [] ;

        
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user() ? new AuthenticatedUserResource($request->user()) : null,
                'is_admin' => $request->user()->is_admin ?? false,
            ],
            'menus_categories' => $menus_categories ?? null,
            'web_menus' => $web_menus ?? null,
            'web_setting' => $web_setting ?? null,
            'flash_message' => fn () => [
                'type' => $request->session()->get('type'),
                'title' => $request->session()->get('title'),
                'message' => $request->session()->get('message'),
                'position' => $request->session()->get('position'),
            ],
            'env' => [
                'app_name' => env('APP_NAME'),
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
