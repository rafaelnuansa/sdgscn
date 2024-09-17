<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\ValidationException;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        $profile =  $request->user();
        $verificationLink = '';
        if (!$profile->hasVerifiedEmail()) {
            $verificationLink = URL::temporarySignedRoute(
                'verification.verify',
                now()->addMinutes(60),
                ['id' => $profile->id, 'hash' => sha1($profile->email)]
            );
        }

        return inertia('profile/index', [
            'profile' => [
                'name' => $profile->name,
                'phone' => $profile->phone,
                'email' => $profile->email,
                'email_verified_at' => $profile->email_verified_at,
                'verification_link' => $verificationLink,
            ],
        ]);
    }

    public function updatePassword(Request $request)
    {
        // Validasi input
        $request->validate([
            'current_password' => 'required',
            'password' => 'required|min:8|confirmed',
        ]);
        try {
            $user = $request->user();

            // Periksa apakah password saat ini cocok
            if (!Hash::check($request->input('current_password'), $user->password)) {
                flashMessage('Password Error', 'The provided password does not match your current password', 'error');
            }

            // Update password
            $user->password = Hash::make($request->input('new_password'));
            $user->save();

            // Flash message dan redirect
            flashMessage('Updated', 'Password saved', 'success');
            return redirect()->back();
        } catch (ValidationException $e) {
            // Tangani kesalahan validasi
            flashMessage('Password Error', $e->getMessage(), 'error');
            return redirect()->back()->withErrors($e->errors());
        } catch (\Exception $e) {
            // Tangani kesalahan umum
            flashMessage('Error', 'An error occurred while updating the password.', 'error');
            return redirect()->back();
        }
    }

    public function updateProfile(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:15|unique:users,phone,' . $request->user()->id,
            'email' => 'required|string|email|max:255|unique:users,email,' . $request->user()->id,
        ]);

        try {
            $user = $request->user();

            // Update profil pengguna
            $user->name = $request->input('name');
            $user->phone = $request->input('phone');
            
            if ($user->email !== $request->input('email')) {
                $user->email = $request->input('email');
                $user->email_verified_at = null;
                $user->sendEmailVerificationNotification();
                flashMessage('Verification', 'Verification link sent to your new email address.', 'info');
            }
            $user->save();

            // Flash message dan redirect
            flashMessage('Updated', 'Profile saved', 'success');
            return redirect()->back();
        } catch (\Exception $e) {
            // Tangani kesalahan umum
            flashMessage('Error', $e->getMessage(), 'error');
            return redirect()->back();
        }
    }

    public function sendVerificationEmail(Request $request)
    {
        $user = $request->user();

        if ($user->hasVerifiedEmail()) {
            flashMessage('Verified', 'Email already Verified', 'warning');
            return redirect()->back();
        }

        $user->sendEmailVerificationNotification();
        flashMessage('Sent', 'Verification link sent', 'success');
        return redirect()->back();
    }
}
