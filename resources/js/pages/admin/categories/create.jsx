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
        name: page_data.category?.name ?? '',
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
                        <div className="space-y-1">
                            <Label>Name</Label>
                            <Input name="name" onChange={onChange} value={data.name} />
                            <InputErrorMessage message={errors.name} />
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
