<?php

namespace App\Http\Controllers;

use App\Mail\ContactFormMail;
use App\Mail\ContactMail;
use App\Models\Contact;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        // Return a view with the page data
        $setting = Setting::first();
        return inertia('contact/index', [
            'setting' => $setting,
        ]);
    }


    public function store(Request $request)
    {
        // Validate the contact form input
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        try {

            // Send the email
            Mail::to(env('MAIL_ADMIN_EMAIL'))->cc($request->email)->send(new ContactFormMail($request->name, $request->email, $request->message));
            flashMessage('success', 'Your message has been sent successfully!');
            return redirect()->route('contact.index');
        } catch (\Exception $e) {
            // Log the error for debugging
            flashMessage('warning', $e->getMessage());
            // Redirect back to the contact page with an error message
            return redirect()->route('contact.index');
        }
    }
}
