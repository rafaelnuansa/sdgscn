import React from 'react';
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

export default function SliderEdit() {
    const { slider } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        title: slider.title ?? '',
        description: slider.description ?? '',
        url: slider.url ?? '',
        _method: 'PUT',
    });


    function onChange(e) {
        setData(e.target.name, e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('image', data.image);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('url', data.url);
        console.log(formData);

        post(route('admin.sliders.update', slider.id), formData);
    };

    return (
        <>
            <Head title="Edit Slider" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Slider</CardTitle>
                        <CardDescription>Edit the existing slider</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="image">Image</Label>
                                <FileUpload id="image" accept={'image/*'} name="image" onChange={(file) => setData('image', file)} />
                                
                            <InputErrorMessage message={errors.image} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" type="text" name="title" value={data.title} onChange={onChange} />
                            <InputErrorMessage message={errors.title} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="description">Description</Label>
                                <Input id="description" type="text" name="description" value={data.description} onChange={onChange} />
                            <InputErrorMessage message={errors.description} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="url">URL</Label>
                                <Input id="url" type="text" name="url" value={data.url} onChange={onChange} />
                            <InputErrorMessage message={errors.url} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="primary" disabled={processing}>
                                    Update
                                </Button>
                                <Link href={route('admin.sliders.index')} className={buttonVariants({ variant: 'default' }) + ' ml-2'}>
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

SliderEdit.layout = (page) => <AdminLayout children={page} />;
