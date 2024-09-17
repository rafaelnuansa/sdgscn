import React, { useState } from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useFilter } from '@/hooks/useFilter';
import { IconCirclePlus } from '@irsyadadl/paranoid';
import SliderTable from './table';

export default function SlidersIndex({ auth, ...props }) {

    const { sliders } = usePage().props;
    // const { data: sliders, meta, links } = props.sliders;
    const { delete: handleDelete } = useForm();


    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.sliders.index'),
        values: params,
        only: ['sliders'],
    });
    return (
        <>
            <Head title="Sliders" />
            <Container>
                <Card>
                    <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                        <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                            <CardHeader className="p-0">
                                <CardTitle>Sliders</CardTitle>
                                <CardDescription>Manage Sliders</CardDescription>
                            </CardHeader>
                            <div className="flex max-w-md flex-col gap-2 md:flex-row">
                                <div className="grid grid-cols-2 gap-x-2 md:flex">
                              
                                    <Button asChild>
                                        <Link href={route('admin.sliders.create')}>
                                            <IconCirclePlus className="mr-2 size-4" />
                                            New
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <SliderTable sliders={sliders} />

                    </CardContent>
                 
                </Card>
            </Container>
        </>
    );
}

SlidersIndex.layout = (page) => <AdminLayout children={page} />;
