import React from 'react';
import { useForm, Head, usePage } from '@inertiajs/react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Editor from '@/components/editor';  // Import the Editor component

export default function PageEdit() {
    const { page } = usePage().props;

    const { data, setData, put, errors, processing } = useForm({
        title: page.title || '',
        content: page.content || '',
        seo_keywords: page.seo_keywords || '',
        seo_description: page.seo_description || '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('admin.pages.update', page.id));
    }

    function handleEditorChange(content) {
        setData('content', content);
    }

    return (
        <>
            <Head title="Edit Page" />
            <Card>
                <CardHeader>
                    <CardTitle>Edit Page</CardTitle>
                    <CardDescription>Edit the page details below</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                type="text"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                            />
                            {errors.title && <div className="text-red-600">{errors.title}</div>}
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="content">Content</Label>
                            <Editor
                                content={data.content}
                                onChange={handleEditorChange}
                            />
                            {errors.content && <div className="text-red-600">{errors.content}</div>}
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="seo_keywords">SEO Keywords</Label>
                            <Textarea
                                id="seo_keywords"
                                type="text"
                                required
                                value={data.seo_keywords}
                                onChange={e => setData('seo_keywords', e.target.value)}
                            />
                            {errors.seo_keywords && <div className="text-red-600">{errors.seo_keywords}</div>}
                        </div>
                        <div className="mb-3">
                            <Label htmlFor="seo_description">SEO Description</Label>
                            <Textarea
                                id="seo_description"
                                type="text"
                                required
                                value={data.seo_description}
                                onChange={e => setData('seo_description', e.target.value)}
                            />
                            {errors.seo_description && <div className="text-red-600">{errors.seo_description}</div>}
                        </div>
                        <Button type="submit" disabled={processing}>
                            Save Changes
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

PageEdit.layout = (page) => <AdminLayout title="Edit Page" children={page} />;
