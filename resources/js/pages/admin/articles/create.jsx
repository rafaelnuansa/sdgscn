import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InputErrorMessage } from '@/components/input-error-message';
import { FileUpload } from '@/components/file-upload';
import { flashMessage } from '@/lib/utils';
import { toast } from 'sonner';
import { AdminLayout } from '@/layouts/admin-layout';
import Editor from '@/components/editor';

export default function Form({ auth, page_meta, page_data }) {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        title: page_data.article?.title ?? '',
        content: page_data.article?.content ?? '',
        _method: page_meta.method,
    });

    function submit(e) {
        e.preventDefault();
        post(page_meta.url, {
            preserveScroll: true,
            onSuccess: (params) => {
                const flash = flashMessage(params);
                if (flash) {
                    toast[flash.type](flash.message);
                }
            },
        });
    }

    function handleEditorChange(content) {
        setData('content', content);
    }

    function onChange(e) {
        setData(e.target.name, e.target.value);
    }

    return (
        <>
            <Head title={page_meta.title}></Head>
            <Card>
                <CardHeader>
                    <CardTitle>{page_meta.title}</CardTitle>
                    <CardDescription>{page_meta.description}</CardDescription>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="max-w-2xl space-y-1">
                                <Label>Thumbnail</Label>
                                <FileUpload onChange={(file) => setData('image', file)} />
                                <InputErrorMessage message={errors.image} />
                            </div>
                            <div className="space-y-1">
                                <Label>Name</Label>
                                <Input name="title" onChange={onChange} value={data.title} />
                                <InputErrorMessage message={errors.title} />
                            </div>
                            <div className="space-y-1">
                                <Label>Description</Label>
                                <Editor content={data.content} onChange={handleEditorChange} />
                                <InputErrorMessage message={errors.content} />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button disabled={processing} type="submit">
                            Submit
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

Form.layout = (page) => <AdminLayout title={page.props.page_meta.title} children={page} />;
