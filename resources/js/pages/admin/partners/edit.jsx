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

export default function PartnerEdit() {
    const { partner } = usePage().props;
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: partner.name ?? '',
        description: partner.description ?? '',
        url: partner.url ?? '',
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
        console.log(formData);

        post(route('admin.partners.update', partner.id), formData);
    };

    return (
        <>
            <Head title="Edit Partner" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Partner</CardTitle>
                        <CardDescription>Edit the existing partner</CardDescription>
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
                            <div className="mt-6">
                                <Button type="submit" variant="primary" disabled={processing}>
                                    Update
                                </Button>
                                <Link href={route('admin.partners.index')} className={buttonVariants({ variant: 'default' }) + ' ml-2'}>
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

PartnerEdit.layout = (page) => <AdminLayout children={page} />;
