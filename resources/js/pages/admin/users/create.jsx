import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { Container } from '@/components/container';
import { AdminLayout } from '@/layouts/admin-layout';
import { Label } from '@/components/ui/label';
import { FileUpload } from '@/components/file-upload';
import { PhoneInput } from '@/components/ui/phone-input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function UserCreate() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        phone: '',
        price: '',
        avatar: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData(name, name === 'avatar' ? files[0] : value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.users.store'));
    };

    return (
        <>
            <Head title="Create User" />
                <Card>
                    <CardHeader>
                        <CardTitle>Create User</CardTitle>
                        <CardDescription>Fill form to Create User</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 gap-2">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <Label> Name </Label>
                                    <Input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Name" error={errors.name} />
                                    {errors.name && <span className="text-sm text-red-500">{errors.name}</span>}
                                </div>
                                <div className="mb-3">
                                    <Label> Name </Label>
                                    <Input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Email" error={errors.email} />
                                    {errors.email && <span className="text-sm text-red-500">{errors.email}</span>}
                                </div>
                                <div className="mb-3">
                                    <Label> Password </Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        error={errors.password}
                                    />
                                    {errors.password && <span className="text-sm text-red-500">{errors.password}</span>}
                                </div>
                                <div className="mb-3">
                                    <Label> Phone </Label>
                                    <PhoneInput
                                        id="phone"
                                        international
                                        defaultCountry="ID"
                                        value={data.phone}
                                        error={errors.phone}
                                        onChange={(value) => setData('phone', value)}
                                        required
                                    />
                                    {/* <Input type="number" name="phone" value={data.phone} onChange={handleChange} placeholder="Phone" error={errors.phone} /> */}
                                    {errors.phone && <span className="text-sm text-red-500">{errors.phone}</span>}
                                </div>
                                <div className="mb-3">
                                    <Label> Image </Label>
                                    <FileUpload type="file" name="avatar" accept="image/*" onChange={handleChange} error={errors.avatar} />
                                    {errors.avatar && <span className="text-sm text-red-500">{errors.avatar}</span>}
                                </div>
                                <div className="mt-6">
                                    <Button type="submit" variant="default" disabled={processing}>
                                        {processing ? 'Creating...' : 'Create'}
                                    </Button>
                                </div>
                            </form>{' '}
                        </div>
                    </CardContent>
                </Card>
        </>
    );
}

UserCreate.layout = (page) => <AdminLayout children={page} />;
