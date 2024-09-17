import React from 'react';
import { useForm, Head } from '@inertiajs/react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Editor from '@/components/editor';
import { InputErrorMessage } from '@/components/input-error-message';

export default function PageCreate() {
    const { data, setData, post, errors, processing } = useForm({
        title: '',
        content: '',
        seo_keywords: '',
        seo_description: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.pages.store'));
    }

    function handleEditorChange(content) {
        setData('content', content);
    }

    return (
        <>
            <Head title="Create Page" />
            <Card>
                <CardHeader>
                    <CardTitle>Create Page</CardTitle>
                    <CardDescription>Create a new page by filling out the form below</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                />
                                <InputErrorMessage message={errors.title} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="content">Content</Label>
                                <Editor content={data.content} onChange={handleEditorChange} />
                                <InputErrorMessage message={errors.content} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="seo_keywords">SEO Keywords</Label>
                                <Textarea
                                    id="seo_keywords"
                                    value={data.seo_keywords}
                                    onChange={e => setData('seo_keywords', e.target.value)}
                                />
                                <InputErrorMessage message={errors.seo_keywords} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="seo_description">SEO Description</Label>
                                <Textarea
                                    id="seo_description"
                                    value={data.seo_description}
                                    onChange={e => setData('seo_description', e.target.value)}
                                />
                                <InputErrorMessage message={errors.seo_description} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={processing}>
                            Create
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

PageCreate.layout = (page) => <AdminLayout title="Setting" children={page} />;
