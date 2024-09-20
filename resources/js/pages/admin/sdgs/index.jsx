import React, { useState } from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import Swal from 'sweetalert2';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useFilter } from '@/hooks/useFilter';
import { IconCirclePlus } from '@irsyadadl/paranoid';
import SdgTable from './table';

export default function SdgsIndex({ auth, ...props }) {

    const { sdgs } = usePage().props;
    // const { data: sdgs, meta, links } = props.sdgs;
    const { delete: handleDelete } = useForm();


    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.sdgs.index'),
        values: params,
        only: ['sdgs'],
    });
    const handleUserDelete = (slug) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(route('admin.sdgs.destroy', slug));
            }
        });
    };

    return (
        <>
            <Head title="Sdgs" />
            <Container>
                <Card>
                    <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                        <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                            <CardHeader className="p-0">
                                <CardTitle>Sdgs</CardTitle>
                                <CardDescription>Manage Sdgs</CardDescription>
                            </CardHeader>
                            <div className="flex max-w-md flex-col gap-2 md:flex-row">
                                <div className="grid grid-cols-2 gap-x-2 md:flex">
                              
                                    <Button asChild>
                                        <Link href={route('admin.sdgs.create')}>
                                            <IconCirclePlus className="mr-2 size-4" />
                                            New
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <SdgTable sdgs={sdgs.data} handleUserDelete={handleUserDelete} />

                    </CardContent>
                 
                </Card>
            </Container>
        </>
    );
}

SdgsIndex.layout = (page) => <AdminLayout children={page} />;
