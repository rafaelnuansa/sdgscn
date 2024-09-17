import React, { useState } from 'react';
import { Container } from '@/components/container';
import { Head, useForm, usePage } from '@inertiajs/react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PhoneInput } from '@/components/ui/phone-input';
import { InputErrorMessage } from '@/components/input-error-message';
import { FileUpload } from '@/components/file-upload';
import { Textarea } from '@/components/ui/textarea';
import { Image } from '@/components/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingIndex() {
    const { setting } = usePage().props;

    const { data, setData, post, errors, processing } = useForm({
        image: null,
        image_dark: null,
        favicon: null,
        website_name: setting.website_name ?? '',
        website_description: setting.website_description ?? '',
        website_address: setting.website_address ?? '',
        website_phone: setting.website_phone ?? '',
        website_phone_whatsapp: setting.website_phone_whatsapp ?? '+62',
        website_facebook_url: setting.website_facebook_url ?? '',
        website_instagram_url: setting.website_instagram_url ?? '',
        website_linkedin_url: setting.website_linkedin_url ?? '',
        website_youtube_url: setting.website_youtube_url ?? '',
        website_email: setting.website_email ?? '',
        mapbox_api_key: setting.mapbox_api_key ?? '',
        _method: 'PUT',
    });

    function onChange(e) {
        setData(e.target.name, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.settings.update'), {
            ...data,
            image: data.image ? data.image : undefined, 
            image_dark: data.image_dark ? data.image_dark : undefined, 
            favicon: data.favicon ? data.favicon : undefined, 
        });
    };

    return (
        <>
            <Head title="Settings" />
            <Card>
                <CardHeader>
                    <CardTitle>General</CardTitle>
                    <CardDescription>Setup your website</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={handleSubmit}>
                        <div className="gap-2 space-y-5">
                            <div>
                                <Label htmlFor="website_name">Website Name</Label>
                                <Input id="website_name" name="website_name" type="text" value={data.website_name} onChange={onChange} />
                                <InputErrorMessage message={errors.website_name} />
                            </div>

                            <div>
                                <Label htmlFor="website_description">Website Description</Label>
                                <Textarea id="website_description" name="website_description" value={data.website_description} onChange={onChange} />
                                <InputErrorMessage message={errors.website_description} />
                            </div>             
                            
                            <hr />
                            <div>
                                <Label htmlFor="image">Website Logo</Label>
                                <FileUpload id="image" name="image" onChange={(file) => setData('image', file)} />
                                <InputErrorMessage message={errors.image} />
                                <Label htmlFor="imageNow">Current Logo</Label>
                                <Image src={`/storage/images/${setting?.website_logo}`} className={'w-[100px] rounded'} />
                            </div>
                            
                            <hr />
                            <div>
                                <Label htmlFor="image_dark">Website Logo Dark</Label>
                                <FileUpload id="image_dark" name="image_dark" onChange={(file) => setData('image_dark', file)} />
                                <InputErrorMessage message={errors.image_dark} />
                                <Label htmlFor="imageNow">Current Logo</Label>
                                <Image src={`/storage/images/${setting?.website_logo_dark}`} className={'w-[100px] rounded'} />

                            </div>
                            <hr />
                            <div>
                                <Label htmlFor="favicon">Favicon</Label>
                                <FileUpload id="favicon" name="favicon" onChange={(file) => setData('favicon', file)} />
                                <InputErrorMessage message={errors.favicon} />
                                <Label htmlFor="imageNow">Current Favicon</Label>
                                <Image src={`/storage/images/${setting?.favicon}`} className={'w-[100px] rounded'} />

                            </div>
                            <div>
                                <Label htmlFor="website_address">Website Address</Label>
                                <Textarea id="website_address" name="website_address" value={data.website_address} onChange={onChange} />
                                <InputErrorMessage message={errors.website_address} />
                            </div>
                            <div>
                                <Label htmlFor="website_phone">Website Phone</Label>
                                <Input id="website_phone" name="website_phone" type="text" value={data.website_phone} onChange={onChange} />
                                <InputErrorMessage message={errors.website_phone} />
                            </div>
                            <div>
                                <Label htmlFor="website_phone_whatsapp">Website Phone (WhatsApp)</Label>
                                <PhoneInput id="website_phone_whatsapp" name="website_phone_whatsapp" defaultCountry="ID" value={data.website_phone_whatsapp} onChange={(value) => setData('website_phone_whatsapp', value)} />
                                <InputErrorMessage message={errors.website_phone_whatsapp} />
                            </div>
                            <div>
                                <Label htmlFor="website_facebook_url">Facebook URL</Label>
                                <Input id="website_facebook_url" name="website_facebook_url" type="text" value={data.website_facebook_url} onChange={onChange} />
                                <InputErrorMessage message={errors.website_facebook_url} />
                            </div>
                            <div>
                                <Label htmlFor="website_instagram_url">Instagram URL</Label>
                                <Input id="website_instagram_url" name="website_instagram_url" type="text" value={data.website_instagram_url} onChange={onChange} />
                                <InputErrorMessage message={errors.website_instagram_url} />
                            </div>
                            <div>
                                <Label htmlFor="website_linkedin_url">LinkedIn URL</Label>
                                <Input id="website_linkedin_url" name="website_linkedin_url" type="text" value={data.website_linkedin_url} onChange={onChange} />
                                <InputErrorMessage message={errors.website_linkedin_url} />
                            </div>
                            <div>
                                <Label htmlFor="website_youtube_url">YouTube URL</Label>
                                <Input id="website_youtube_url" name="website_youtube_url" type="text" value={data.website_youtube_url} onChange={onChange} />
                                <InputErrorMessage message={errors.website_youtube_url} />
                            </div>
                            <div>
                                <Label htmlFor="website_email">Website Email</Label>
                                <Input id="website_email" name="website_email" type="text" value={data.website_email} onChange={onChange} />
                                <InputErrorMessage message={errors.website_email} />
                            </div>
                            <div>
                                <Label htmlFor="mapbox_api_key">Mapbox API Key</Label>
                                <Input id="mapbox_api_key" name="mapbox_api_key" type="text" value={data.mapbox_api_key} onChange={onChange} />
                                <InputErrorMessage message={errors.mapbox_api_key} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <Button type="submit" disabled={processing}>Save Changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

SettingIndex.layout = (page) => <AdminLayout title="Setting" children={page} />;
