import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import { Input } from '@/components/ui/input';
import { useForm } from '@inertiajs/react';
import { FileUpload } from '@/components/file-upload';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { InputErrorMessage } from '@/components/input-error-message';

export default function ExpertsCreate() {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: '',
        description: '', // Tambahkan kolom description di form data
        link: '', // Tambahkan kolom link di form data
    });

    function onChange(e) {
        setData(e.target.name, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('description', data.description); // Tambahkan description ke FormData
        formData.append('link', data.link); // Tambahkan link ke FormData
        formData.append('image', data.image); // Menambahkan gambar ke FormData

        post(route('admin.experts.store'), formData); // Mengirimkan formData
    };

    return (
        <>
            <Head title="Create Expert" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Create Expert</CardTitle>
                        <CardDescription>
                            Create a new expert
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="image">Image</Label>
                                <FileUpload id="image" accept={'image/*'} name="image" onChange={(file) => setData('image', file)} />
                                <InputErrorMessage message={errors.image} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" name="name" onChange={onChange} />
                                <InputErrorMessage message={errors.name} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    onChange={onChange}
                                    value={data.description} // Menampilkan nilai dari state
                                />
                                <InputErrorMessage message={errors.description} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="link">Link</Label>
                                <Input
                                    id="link"
                                    type="url"
                                    name="link"
                                    onChange={onChange}
                                    value={data.link} // Menampilkan nilai dari state
                                />
                                <InputErrorMessage message={errors.link} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="default" disabled={processing}>
                                    Create
                                </Button>
                                <Link
                                    href={route('admin.experts.index')}
                                    className={buttonVariants({ variant: 'default' }) + ' ml-2'}
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

ExpertsCreate.layout = (page) => <AdminLayout children={page} />;
