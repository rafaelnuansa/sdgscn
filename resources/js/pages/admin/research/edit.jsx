import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { InputErrorMessage } from '@/components/input-error-message';

export default function ResearchEdit({ research, sdgs }) {
    const { data, setData, post, errors, processing } = useForm({
        sdg_id: research.sdg_id ?? '',
        title: research.title ?? '',
        year: research.year ?? '',
        author: research.author ?? '',
        link: research.link ?? '',
        _method: 'PUT',
    });

    const onChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.research.update', research.id), data);
    };

    return (
        <>
            <Head title="Edit Research" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Edit Research</CardTitle>
                        <CardDescription>Edit the existing research entry</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Label htmlFor="sdg_id">SDG</Label>
                                <select
                                    id="sdg_id"
                                    name="sdg_id"
                                    value={data.sdg_id}
                                    onChange={onChange}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="">Select SDG</option>
                                    {sdgs.map((sdg) => (
                                        <option key={sdg.id} value={sdg.id}>
                                            {sdg.name}
                                        </option>
                                    ))}
                                </select>
                                <InputErrorMessage message={errors.sdg_id} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="title">Title</Label>
                                <Input id="title" type="text" name="title" value={data.title} onChange={onChange} />
                                <InputErrorMessage message={errors.title} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="year">Year</Label>
                                <Input id="year" type="text" name="year" value={data.year} onChange={onChange} />
                                <InputErrorMessage message={errors.year} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="author">Author</Label>
                                <Input id="author" type="text" name="author" value={data.author} onChange={onChange} />
                                <InputErrorMessage message={errors.author} />
                            </div>
                            <div className="mt-4">
                                <Label htmlFor="link">Link</Label>
                                <Input id="link" type="url" name="link" value={data.link} onChange={onChange} />
                                <InputErrorMessage message={errors.link} />
                            </div>
                            <div className="mt-6">
                                <Button type="submit" variant="primary" disabled={processing}>
                                    Update
                                </Button>
                                <Link
                                    href={route('admin.research.index')}
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

ResearchEdit.layout = (page) => <AdminLayout children={page} />;
