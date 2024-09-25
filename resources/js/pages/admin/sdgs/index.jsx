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
import Pagination from '@/shared/pagination'; // Import Pagination if needed
import { router } from '@inertiajs/react'; // Import router for navigation

export default function SdgsIndex({ auth, ...props }) {
    const { sdgs } = usePage().props;
    const { delete: handleDelete } = useForm();

    const [search, setSearch] = useState(''); // State for search input
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

    // Handle filter submission
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Send the search value to the backend
        router.get(route('admin.sdgs.index'), { search });
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
                                <form onSubmit={handleFilterSubmit} className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        placeholder="Search SDGs..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="p-2 border border-gray-300 rounded-md"
                                    />
                                    <Button type="submit" className={buttonVariants('primary')}>
                                        Search
                                    </Button>
                                </form>
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

                    <CardFooter className="border-t text-sm text-muted-foreground">
                        <Pagination links={sdgs.links} />
                    </CardFooter>
                </Card>
            </Container>
        </>
    );
}

SdgsIndex.layout = (page) => <AdminLayout children={page} />;
