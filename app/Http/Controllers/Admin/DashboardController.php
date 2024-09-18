<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function index()
    {
        // Dapatkan tanggal awal dan akhir bulan ini
        $usersCount = User::count();
        return inertia('admin/dashboard/index', [
            'usersCount' => $usersCount,
        ]);
    }
}
