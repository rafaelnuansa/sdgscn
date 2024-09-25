<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Article;
use App\Models\Expert;
use App\Models\Page;
use App\Models\Sdg;
use App\Models\SdgPublication;
use App\Models\SdgResearch;
use App\Models\Slider;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // Get all counts
        $usersCount = User::count();
        $articlesCount = Article::count();
        $sdgsCount = Sdg::count();
        $pagesCount = Page::count();
        $slidersCount = Slider::count();
        $expertsCount = Expert::count();
        $publicationsCount = SdgPublication::count();
        $researchCount = SdgResearch::count();

        // Get publications and research statistics based on created_at
        $publicationsStats = SdgPublication::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        $researchStats = SdgResearch::select(DB::raw('DATE(created_at) as date'), DB::raw('count(*) as count'))
            ->groupBy('date')
            ->orderBy('date')
            ->get();

        return inertia('admin/dashboard/index', [
            'usersCount' => $usersCount,
            'articlesCount' => $articlesCount,
            'sdgsCount' => $sdgsCount,
            'pagesCount' => $pagesCount,
            'slidersCount' => $slidersCount,
            'expertsCount' => $expertsCount,
            'publicationsCount' => $publicationsCount,
            'researchCount' => $researchCount,
            'publicationsStats' => $publicationsStats,
            'researchStats' => $researchStats,
        ]);
    }
}
