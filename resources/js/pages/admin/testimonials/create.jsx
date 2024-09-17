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
import { Textarea } from '@/components/ui/textarea';

export default function TestimonialsCreate() {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: '',
        from: '',
        description: '',
    });

    function onChange(e) {
        setData(e.target.name, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('from', data.from);
        formData.append('description', data.description);
        formData.append('image', data.image); // Menambahkan gambar ke FormData
        post(route('admin.testimonials.store'), formData); // Mengirimkan formData
    };

    return (
        <>
            <Head title="Create Testimonial" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Create Testimonial</CardTitle>
                        <CardDescription>
                            Create a new testimonial
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
                                <Label htmlFor="name">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={onChange}
                                />
                                <InputErrorMessage message={errors.name} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="from">
                                    From
                                </Label>
                                <Input
                                    id="from"
                                    type="text"
                                    name="from"
                                    onChange={onChange}
                                />
                                <InputErrorMessage message={errors.from} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="description">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    type="text"
                                    name="description"
                                    onChange={onChange}
                                />
                                <InputErrorMessage message={errors.description} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="default" disabled={processing}>
                                    Create
                                </Button>
                                <Link
                                    href={route('admin.testimonials.index')}
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

TestimonialsCreate.layout = (page) => <AdminLayout children={page} />;
