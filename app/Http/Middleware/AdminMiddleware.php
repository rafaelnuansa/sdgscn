<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Periksa apakah pengguna adalah admin
        if ($request->user() && $request->user()->is_admin) {
            return $next($request);
        }

        // Jika bukan admin, redirect atau berikan respons sesuai kebutuhan Anda
        return redirect()->route('home')->with('error', 'Anda tidak memiliki akses sebagai admin.');
    }
}
