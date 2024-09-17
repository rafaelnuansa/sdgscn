import React, { useState } from 'react';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import Swal from 'sweetalert2';
import UserTable from './table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { IconCirclePlus, IconPerson } from '@irsyadadl/paranoid';

export default function UsersIndex({ auth, ...props }) {

    const { data: users, meta, links } = props.users;
    const { delete: handleDelete } = useForm();


    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.users.index'),
        values: params,
        only: ['users'],
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
                handleDelete(route('admin.users.destroy', slug));
            }
        });
    };

    return (
        <>
            <Head title="Users" />
                <Card>
                    <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                        <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                            <CardHeader className="p-0">
                                <CardTitle className="flex">Users</CardTitle>
                                <CardDescription>Users Managements</CardDescription>
                            </CardHeader>
                            <div className="flex max-w-md flex-col gap-2 md:flex-row">
                                <Input
                                    value={params?.search}
                                    onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                                    placeholder="Search..."
                                />
                                <div className="grid grid-cols-2 gap-x-2 md:flex">
                                    <Select value={params?.status} onValueChange={(e) => setParams({ ...params, status: e })}>
                                        <SelectTrigger className="md:w-40">
                                            <SelectValue placeholder={params?.status} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem>All</SelectItem>
                                            <SelectItem value="draft">Aktif</SelectItem>
                                            <SelectItem value="pending">Pending</SelectItem>
                                            <SelectItem value="published">Published</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Button asChild>
                                        <Link href={route('admin.users.create')}>
                                            <IconCirclePlus className="mr-2 size-4" />
                                            New
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <UserTable users={users} handleUserDelete={handleUserDelete} />

                    </CardContent>
                    <CardFooter className="justify-between border-t pt-6 text-sm text-muted-foreground">
                        <span>
                            Showing {meta.from} of {meta.total}
                        </span>
                        {meta.has_pages && (
                            <div className="flex items-center gap-x-1">
                                <Button asChild size="sm" variant="outline">
                                    {links.prev ? (
                                        <Link href={links.prev}>
                                            <IconChevronLeft className="-ml-1 mr-1 size-4" />
                                            Prev
                                        </Link>
                                    ) : (
                                        <span>Prev</span>
                                    )}
                                </Button>
                                <Button asChild size="sm" variant="outline">
                                    {links.next ? (
                                        <Link href={links.next}>
                                            Next
                                            <IconChevronRight className="-mr-1 ml-1 size-4" />
                                        </Link>
                                    ) : (
                                        <span>Next</span>
                                    )}
                                </Button>
                            </div>
                        )}
                    </CardFooter>
                </Card>
        </>
    );
}

UsersIndex.layout = (page) => <AdminLayout children={page} />;
