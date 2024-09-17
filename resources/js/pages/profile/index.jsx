import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, router, usePage } from '@inertiajs/react';
import { InputError } from '@/components/input-error';
import { useForm } from '@inertiajs/react';
import React, { useRef, useState } from 'react'
import { PhoneInput } from '@/components/ui/phone-input';
import { Layout } from '@/layouts/users/layout';
export default function ProfileIndex() {
    const { props } = usePage();
    const { profile } = props;
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const [emailVerificationSent, setEmailVerificationSent] = useState(false);


    const { data, setData, errors, put, reset, processing } = useForm({
        name: profile.name || '',
        phone: profile.phone || '',
        email: profile.email || '',
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();
        put(route('admin.profile.updatePassword'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const updateProfile = (e) => {
        e.preventDefault();

        put(route('admin.profile.update'), {
            preserveScroll: true,
            onSuccess: () => router.visit(route('admin.profile.index'), { method: 'get' }),
        });
    };

    const resendVerificationEmail = () => {
        router.post(route('admin.profile.sendVerificationEmail'), {}, {
            onSuccess: () => setEmailVerificationSent(true),
        });
    };


    return (
        <>
            <Head title='Profile' />

            <div className='space-y-5'>

            {!profile.email_verified_at && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Email Verification</CardTitle>
                            <CardDescription>Your Email is not verified, Please Confirm Your Email</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <Button onClick={resendVerificationEmail} disabled={emailVerificationSent}>
                                    {emailVerificationSent ? 'Verification Email Sent' : 'Resend Verification Email'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                )}


                <Card>
                    <CardHeader>
                        <CardTitle>Edit Profile</CardTitle>
                        <CardDescription>Edit Profile information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={updateProfile} className="space-y-6">
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    type="text"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.name} className="mt-2" />
                            </div>

                            <div>
                                <Label htmlFor="phone">Phone</Label>

                                <PhoneInput
                                    id="phone"
                                    international
                                    defaultCountry="ID"
                                    value={data.phone}
                                    onChange={(value) => setData('phone', value)}
                                    required
                                />
                                <InputError message={errors.phone} className="mt-2" />
                            </div>

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    type="email"
                                    className="mt-1 block w-full"
                                />
                                <InputError message={errors.email} className="mt-2" />
                            </div>




                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Save</Button>


                            </div>
                        </form>
                    </CardContent>
                </Card>


                <Card>
                    <CardHeader>
                        <CardTitle>Change Password</CardTitle>
                        <CardDescription>Change your account password</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={updatePassword} className="space-y-6">
                            <div>
                                <Label htmlFor="current_password">Password</Label>

                                <Input
                                    id="current_password"
                                    ref={currentPasswordInput}
                                    value={data.current_password}
                                    onChange={(e) => setData('current_password', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                />

                                <InputError message={errors.current_password} className="mt-2" />
                            </div>

                            <div>
                                <Label htmlFor="password">New Password</Label>

                                <Input
                                    id="password"
                                    ref={passwordInput}
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div>
                                <Label htmlFor="password_confirmation">Confirm Password</Label>

                                <Input
                                    id="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    type="password"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center gap-4">
                                <Button disabled={processing}>Save</Button>

                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}




ProfileIndex.layout = (page) => <Layout children={page} />;
