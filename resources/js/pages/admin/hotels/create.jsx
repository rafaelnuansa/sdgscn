
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { MultiSelect } from '@/components/multi-select';
import { InputErrorMessage } from '@/components/input-error-message';
import { Textarea } from '@/components/ui/textarea';
import { FileUpload } from '@/components/file-upload';
import { flashMessage } from '@/lib/utils';
import { toast } from 'sonner';
import { AdminLayout } from '@/layouts/admin-layout';

export default function Form({ auth, page_meta, page_data }) {
    const { data, setData, post, errors, processing } = useForm({
        image: null,
        name: page_data.hotel?.name ?? '',
        location: page_data.hotel?.location ?? '',
        stars: page_data.hotel?.stars ?? '',
        description: page_data.hotel?.description ?? '',
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
                            <Input name="name" onChange={onChange} value={data.name} />
                            <InputErrorMessage message={errors.name} />
                        </div>
                        <div className="space-y-1">
                            <Label>Location</Label>
                            <Input name="location" onChange={onChange} value={data.location} />
                            <InputErrorMessage message={errors.location} />
                        </div>

                        <div className="space-y-1">
                            <Label>Stars / Rate</Label>
                            <Input name="stars" placeholder="1-5" type="number" onChange={onChange} value={data.stars} />
                            <InputErrorMessage message={errors.stars} />
                        </div>
                        <div className="space-y-1">
                            <Label>Description</Label>
                            <Textarea name="description" onChange={onChange} value={data.description} />
                            <InputErrorMessage message={errors.description} />
                        </div>
                       
                    </div>
                </CardContent>
                <CardFooter>
                    <Button disabled={processing} type="submit">
                        Save
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}

Form.layout = (page) => <AdminLayout title={page.props.page_meta.title} children={page} />;
