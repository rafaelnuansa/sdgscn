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

export default function SlidersCreate() {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        title: '',
        description: '',
        url: '',
    });


    function onChange(e) {
        setData(e.target.name, e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('url', data.url);
        formData.append('image', data.image); // Menambahkan gambar ke FormData

        post(route('admin.sliders.store'), formData); // Mengirimkan formData
    };

    return (
        <>
            <Head title="Create Slider" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Create Slider</CardTitle>
                        <CardDescription>
                            Create a new slider
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="image">
                                    Image
                                </Label>
                               
                                <FileUpload id="image" accept={'image/*'} name="image" onChange={(file) => setData('image', file)} />
                                      <InputErrorMessage message={errors.image} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="title">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    name="title"
                                    onChange={onChange}
                                      />
                                      <InputErrorMessage message={errors.title} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="description">
                                    Description
                                </Label>
                                <Input
                                    id="description"
                                    type="text"
                                    name="description"
                                  onChange={onChange}
                                      />
                                      <InputErrorMessage message={errors.description} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="url">
                                    URL
                                </Label>
                                <Input
                                    id="url"
                                    type="text"
                                    name="url"
                                    onChange={onChange}
                                      />
                                      <InputErrorMessage message={errors.url} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="default" disabled={processing}>
                                    Create
                                </Button>
                                <Link
                                    href={route('admin.sliders.index')}
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

SlidersCreate.layout = (page) => <AdminLayout children={page} />;
