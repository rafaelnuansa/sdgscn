<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    // public function authenticate(Request $request): RedirectResponse
    // {
    //     $email      = $request->input('email');
    //     $password   = $request->input('password');

    //     if(Auth::guard('web')->attempt(['email' => $email, 'password' => $password])) {
    //         // Set session untuk menandakan bahwa pengguna telah login
    //         $request->session()->regenerate();
    //         // Redirect ke halaman yang sesuai setelah login berhasil
    //         return redirect()->intended('/admin/dashboard');
    //     } else {
    //         // Redirect kembali ke halaman login dengan pesan kesalahan
    //         return redirect()->route('admin.login.index')->with('error', 'Login Gagal!');
    //     }
    // }

    public function authenticate(Request $request): RedirectResponse
    {
        $email      = $request->input('email');
        $password   = $request->input('password');

        if(Auth::guard('web')->attempt(['email' => $email, 'password' => $password])) {
            // Set session untuk menandakan bahwa pengguna telah login
            $request->session()->regenerate();
            // Redirect ke halaman yang sesuai setelah login berhasil
            return redirect()->back();
        } else {
            // Redirect kembali ke halaman login dengan pesan kesalahan
            return redirect()->back()->with('error', 'Login Gagal mohon cek akun anda!');
        }
    }

    public function showLoginForm()
    {
        return view('admin.auth.login');
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect('/admin/login');
    }
}
