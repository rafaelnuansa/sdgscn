import React, { useRef, useState } from 'react';
import { AdminLayout } from '@/layouts/admin-layout';
import { Image } from '@/components/image';
import { usePage, useForm, Link, router, Head } from '@inertiajs/react';
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button, buttonVariants } from '@/components/ui/button';
import { IconArrowLeft } from '@irsyadadl/paranoid';
import { Input } from '@/components/ui/input';
import { AlertAction } from '@/components/alert-action';

export default function PackageGalleries({ ...props }) {
    const { images, package: currentPackage, processing, errors } = usePage().props;
    const { setData, post, processing: formProcessing, errors: formErrors } = useForm();

    const [numSelectedFiles, setNumSelectedFiles] = useState(0);
    const fileInputRef = useRef(null);

    const [params, setParams] = useState(props.state);

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

        post(route('admin.packages.galleries.store', { package: currentPackage }), formData, {
            onError: (errors) => {
                console.error(errors);
            },
            onSuccess: () => {

                router.visit(route('admin.packages.galleries.index', { package: currentPackage }), { method: 'get' })
            }

        });
        // Reset input file after successful submission
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setNumSelectedFiles(0);
    };

    return (
        <AdminLayout>
            <Head title='Galleries'></Head>
            <div className='form-group flex gap-2'>
                <Link className={buttonVariants({ variant: 'outline', size: 'sm' }) + ' mb-4'} href={route('admin.packages.index')}><IconArrowLeft className='mr-1' /> Back to List</Link>
            </div>
            <Card>

                <CardHeader >
                    <CardTitle>{currentPackage.name} Images</CardTitle>
                    <CardDescription>Images Gallery Package {currentPackage.name}</CardDescription>
                </CardHeader>
                
                <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">

                    <div className='p-10 border-b border-t'>
                        <form onSubmit={onSubmit}>
                            <div className="form-group flex gap-2">
                                <Input
                                    ref={fileInputRef}
                                    className="max-w-sm"
                                    type="file"
                                    id="fileInput"
                                    name="images"
                                    multiple
                                    onChange={handleFileChange}
                                />
                                <Button type="submit" variant="outline" disabled={processing || formProcessing}>
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
                                    {/* <Button
                                        variant="destructive"
                                        className="w-full"
                                        onClick={() => handleDelete(image.id)}
                                    >
                                        Delete
                                    </Button>
                                     */}

                                    <AlertAction
                                        trigger={
                                            <Button
                                                variant="destructive"
                                                className="w-full"
                                                onSelect={(e) => e.preventDefault()}
                                            >
                                                Delete
                                            </Button>
                                        }
                                        title="Delete Package Image"
                                        description="Are you sure you want to permanent delete this Image?"
                                        action={() =>
                                            router.delete(
                                                route('admin.packages.galleries.destroy', { package: currentPackage.id, image: image.id }),
                                                { preserveScroll: true },
                                            )
                                        }
                                    />
                                </PopoverContent>
                            </Popover>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
