import React, { useState } from 'react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Image } from '@/components/image';
import { usePage, useForm, Link, router } from '@inertiajs/react';
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button, buttonVariants } from '@/components/ui/button';
import { IconArrowLeft } from '@irsyadadl/paranoid';
import { Input } from '@/components/ui/input';

export default function PackageGalleries() {
    const { images, hotel: currentHotel, processing, errors } = usePage().props;
    const { setData, post, processing: formProcessing, errors: formErrors } = useForm();

    const [numSelectedFiles, setNumSelectedFiles] = useState(0);

    const handleFileChange = (e) => {
        const files = e.target.files;
        setData('images', files);
        setNumSelectedFiles(files.length); // Update the number of selected files
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < numSelectedFiles; i++) {
            formData.append('images[]', e.target.images[i]);
        }

        post(route('admin.hotels.gallery.store', { hotel: currentHotel }), formData, {
            onError: (errors) => {
                console.error(errors);
            }
        });
    };

    const handleDelete = (imageId) => {
        router.delete(route('admin.hotels.gallery.destroy', { hotel: currentHotel.id, image: imageId }), {
            onError: (errors) => {
                console.error(errors);
            }
        });
    };

    return (
        <AdminLayout>
            <Link className={buttonVariants({ variant: 'outline', size: 'sm' }) + ' mb-4'} href={route('admin.hotels.index')}><IconArrowLeft className='mr-1' /> Back to List</Link>

            <Card>
                <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                    <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                        <CardHeader className="p-0">
                            <CardTitle>{currentHotel.name} Images</CardTitle>
                            <CardDescription>Images Gallery Hotes `{currentHotel.name}`</CardDescription>
                        </CardHeader>
                        <div className="flex max-w-md flex-col gap-2 md:flex-row">

                        </div>
                    </div>

                    <div className='p-10 border-b border-t'>
                        <form onSubmit={onSubmit}>
                            <div className="form-group flex justify-between">
                                <Input
                                className="max-w-sm"
                                    type="file"
                                    id="fileInput"
                                    name="images"
                                    multiple
                                    onChange={handleFileChange}
                                />
                                <Button type="submit" variant="default" disabled={processing || formProcessing}>
                                    {processing || formProcessing ? 'Processing...' : 'Submit'}
                                </Button>
                                {errors?.images && <p className="text-red-500">{errors?.images}</p>}
                                {formErrors?.images && <p className="text-red-500">{formErrors?.images}</p>}
                            </div>
                        </form>
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 p-5">
                        {images.map((image) => (
                            <Popover key={image.id}>
                                <PopoverTrigger className="cursor-pointer">
                                    <Image
                                        src={`/storage/images/${image.image}`}
                                        alt={image.image}
                                        className="w-full border h-auto rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-200"
                                        objectFit="cover"
                                    />
                                </PopoverTrigger>
                                <PopoverContent>
                                    <Image
                                        src={`/storage/images/${image.image}`}
                                        alt={image.image}
                                        className="w-full h-auto rounded-md mb-4"
                                        objectFit="cover"
                                    />
                                    <Button
                                        variant="destructive"
                                        className="w-full"
                                        onClick={() => handleDelete(image.id)}
                                    >
                                        Delete
                                    </Button>
                                </PopoverContent>
                            </Popover>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
