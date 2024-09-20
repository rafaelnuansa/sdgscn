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

export default function ExpertEdit() {
    const { expert } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: expert.name ?? '',
        description: expert.description ?? '', // Tambahkan kolom description
        link: expert.link ?? '', // Tambahkan kolom link
        _method: 'PUT',
    });

    function onChange(e) {
        setData(e.target.name, e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', data.image);
        formData.append('name', data.name);
        formData.append('description', data.description); // Tambahkan description ke FormData
        formData.append('link', data.link); // Tambahkan link ke FormData

        post(route('admin.experts.update', expert.id), formData); // Mengirimkan formData
    };

    return (
        <>
            <Head title="Edit Expert" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Expert</CardTitle>
                        <CardDescription>Edit the existing expert</CardDescription>
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
                                <Input id="name" type="text" name="name" value={data.name} onChange={onChange} />
                                <InputErrorMessage message={errors.name} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    value={data.description}
                                    onChange={onChange}
                                />
                                <InputErrorMessage message={errors.description} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="link">Link</Label>
                                <Input
                                    id="link"
                                    type="url"
                                    name="link"
                                    value={data.link}
                                    onChange={onChange}
                                />
                                <InputErrorMessage message={errors.link} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="primary" disabled={processing}>
                                    Update
                                </Button>
                                <Link href={route('admin.experts.index')} className={buttonVariants({ variant: 'default' }) + ' ml-2'}>
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

ExpertEdit.layout = (page) => <AdminLayout children={page} />;
