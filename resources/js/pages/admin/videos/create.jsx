 
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { InputErrorMessage } from '@/components/input-error-message';
import { flashMessage } from '@/lib/utils';
import { toast } from 'sonner';
import { AdminLayout } from '@/layouts/admin-layout';
import { FileUploadVideo } from '@/components/file-upload-video';

export default function Form({ auth, page_meta, page_data }) {
    const { data, setData, post, errors, processing } = useForm({
        video: null,
        title: page_data.video?.title ?? '',
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
                        
                    <div className="space-y-1">
                            <Label>Title</Label>
                            <Input name="title" onChange={onChange} value={data.title} />
                            <InputErrorMessage message={errors.title} />
                        </div>
               
                        <div className="max-w-sm space-y-1">
                            <Label>Video</Label>
                            <FileUploadVideo onChange={(file) => setData('video', file)} />
                            <InputErrorMessage message={errors.video} />
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
