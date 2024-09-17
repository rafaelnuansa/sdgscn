<?php
namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingController extends Controller
{
    public function index()
    {
        $setting = Setting::first();
        if (!$setting) {
            $setting = new Setting();
        }
        return inertia('admin/settings/index', ['setting' => $setting]);
    }

    public function update(Request $request)
    {
        $request->validate([
            'website_name' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'image_dark' => 'nullable|image|mimes:jpeg,jpg,png,webp|max:2048',
            'favicon' => 'nullable|mimes:jpeg,jpg,png,webp,ico|max:2048',
            'website_description' => 'nullable|string',
            'website_address' => 'nullable|string',
            'website_phone' => 'nullable|string',
            'website_phone_whatsapp' => 'nullable|string',
            'website_facebook_url' => 'nullable|string|url',
            'website_instagram_url' => 'nullable|string|url',
            'website_linkedin_url' => 'nullable|string|url',
            'website_youtube_url' => 'nullable|string|url',
            'website_email' => 'nullable|string|email',
            'mapbox_api_key' => 'nullable|string',
        ]);

        try {
            $setting = Setting::firstOrNew();
            
            if ($request->hasFile('image')) {
                // Upload new image
                $image = $request->file('image');
                $image->storeAs('public/images', $image->hashName());

                // Delete old image
                if ($setting->website_logo) {
                    Storage::delete('public/images/' . $setting->website_logo);
                }

                $setting->website_logo = $image->hashName();
            }
      
            if ($request->hasFile('image_dark')) {
                // Upload new image
                $image = $request->file('image_dark');
                $image->storeAs('public/images', $image->hashName());

                // Delete old image
                if ($setting->website_logo_dark) {
                    Storage::delete('public/images/' . $setting->website_logo_dark);
                }

                $setting->website_logo_dark = $image->hashName();
            }
            if ($request->hasFile('favicon')) {
                // Upload new image
                $image = $request->file('favicon');
                $image->storeAs('public/images', $image->hashName());

                // Delete old image
                if ($setting->website_favicon) {
                    Storage::delete('public/images/' . $setting->favicon);
                }

                $setting->website_favicon = $image->hashName();
            }
            $setting->website_name = $request->website_name;
            $setting->website_description = $request->website_description;
            $setting->website_address = $request->website_address;
            $setting->website_phone = $request->website_phone;
            $setting->website_phone_whatsapp = $request->website_phone_whatsapp;
            $setting->website_facebook_url = $request->website_facebook_url;
            $setting->website_instagram_url = $request->website_instagram_url;
            $setting->website_linkedin_url = $request->website_linkedin_url;
            $setting->website_youtube_url = $request->website_youtube_url;
            $setting->website_email = $request->website_email;
            $setting->mapbox_api_key = $request->mapbox_api_key;

            // Save the changes
            $setting->save();

            flashMessage('Berhasil disimpan', 'Setting Website telah diperbarui');
            return redirect()->route('admin.settings.index');
        } catch (\Exception $e) {
            // Handle error
            flashMessage('Error', $e->getMessage());
            return redirect()->route('admin.settings.index');
        }
    }
}
