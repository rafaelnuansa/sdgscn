import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminLayout } from '@/layouts/admin-layout';
import { formatRupiah } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconChevronLeft, IconChevronRight, IconCirclePlusFill, IconDotsHorizontal, IconDotsVertical, IconOpenLink, IconStar } from '@irsyadadl/paranoid';
import { Image } from '@/components/image';
import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { AlertAction } from '@/components/alert-action';

export default function Index({ auth, ...props }) {

    const { data: hotels, meta, links } = props.hotels;
    const { categories } = usePage().props;

    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.hotels.index'),
        values: params,
        only: ['hotels'],
    });

    return (
        <AdminLayout>
            <Head title='Hotels'></Head>
                <Card>
                    <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                        <CardHeader className="p-0">
                            <CardTitle>Hotels</CardTitle>
                        </CardHeader>
                        <div className="flex max-w-md flex-col gap-2 md:flex-row">
                            <Input
                                value={params?.search}
                                onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                                placeholder="Search..."
                            />
                           
                           <Button asChild>
                                    <Link href={route('admin.hotels.create')}>
                                        <IconCirclePlusFill className="mr-2 size-4" />
                                        New
                                    </Link>
                                </Button>
                        </div>
                    </div>
                    <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Hotels</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Stars</TableHead>
                                    <TableHead>Created At</TableHead>
                                    <TableHead />
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {hotels.map((hotel, index) => (
                                    <TableRow key={hotel.id}>
                                        <TableCell>{meta.from + index}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 w-20">
                                                    <Image
                                                        skeletonHeight="40"
                                                        className="h-full w-full object-cover rounded"
                                                        src={`/images/${hotel.image}`}
                                                    />
                                                </div>
                                                <div className="ml-4">
                                                    <p className="font-semibold">{hotel.name}</p>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>{hotel.location}</TableCell>
                                        <TableCell>
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, index) => (
                                                    <IconStar width={10} key={index} className={index < hotel.stars ? 'fill-current text-yellow-500' : 'text-gray-300'} />
                                                ))}
                                            </div>
                                        </TableCell>
                                        <TableCell>{hotel.created_at}</TableCell>
                                        <TableCell>
                                            <div className="flex justify-end">
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger>
                                                        <IconDotsVertical className="size-4" />
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="w-48">
                                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                        
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('admin.hotels.gallery', [hotel])}>
                                                                Galleries
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem asChild>
                                                            <Link href={route('admin.hotels.edit', [hotel])}>
                                                                Edit
                                                            </Link>
                                                        </DropdownMenuItem>
                                                        {auth.user.is_admin && (
                                                            <DropdownMenuGroup>

                                                                <DropdownMenuSeparator />
                                                                <AlertAction
                                                                    trigger={
                                                                        <DropdownMenuItem
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            Delete
                                                                        </DropdownMenuItem>
                                                                    }
                                                                    title="Delete Hotel"
                                                                    description="Are you sure you want to delete this hotel?"
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.hotels.destroy', [hotel]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuGroup>
                                                        )}
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
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
        </AdminLayout>
    );
}
