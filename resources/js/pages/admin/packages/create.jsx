
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
        category_id: page_data.pkg?.category_id ?? '',
        name: page_data.pkg?.name ?? '',
        description: page_data.pkg?.description ?? '',
        price: page_data.pkg?.price ?? '',
        minimum_dp_percent : page_data.pkg?.minimum_dp_percent ?? '',
        rate: page_data.pkg?.rate ?? '',
        day: page_data.pkg?.day ?? '',
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
                            <Label>Price</Label>
                            <Input name="price" onChange={onChange} value={data.price} />
                            <InputErrorMessage message={errors.price} />
                        </div>
                        <div className="space-y-1">
                            <Label>Min DP %</Label>
                            <Input name="minimum_dp_percent" onChange={onChange} value={data.minimum_dp_percent} />
                            <InputErrorMessage message={errors.minimum_dp_percent} />
                        </div>
                        <div className="space-y-1">
                            <Label>Days</Label>
                            <Input name="day" onChange={onChange} value={data.day} />
                            <InputErrorMessage message={errors.day} />
                        </div>
                        <div className="space-y-1">
                            <Label>Rate</Label>
                            <Input name="rate" placeholder="1-5" type="number" onChange={onChange} value={data.rate} />
                            <InputErrorMessage message={errors.rate} />
                        </div>
                        <div className="space-y-1">
                            <Label>Description</Label>
                            <Textarea name="description" onChange={onChange} value={data.description} />
                            <InputErrorMessage message={errors.description} />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <Label>Category</Label>
                                <Select
                                    defaultValue={data.category_id}
                                    onValueChange={(value) => setData('category_id', value)}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select category">
                                            {page_data.categories.find((category) => category.value == data.category_id)
                                                ?.label ?? 'Select a category'}
                                        </SelectValue>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {page_data.categories.map((category) => (
                                            <SelectItem key={category.value} value={category.value}>
                                                {category.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <InputErrorMessage message={errors.category_id} />
                            </div>
                        
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
    );
}

Form.layout = (page) => <AdminLayout title={page.props.page_meta.title} children={page} />;
