import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminLayout } from '@/layouts/admin-layout';
import { formatDateTime, formatRupiah } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconChevronLeft, IconChevronRight, IconCirclePlusFill, IconDotsVertical, IconMoneybag, IconStar, IconSunrise, IconTrash } from '@irsyadadl/paranoid';
import { Image } from '@/components/image';
import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { AlertAction } from '@/components/alert-action';
import { Toggle } from '@/components/ui/toggle';

export default function Index({ auth, ...props }) {

    const { data: packages, meta, links } = props.packages;
    const { categories } = usePage().props;

    // Function to toggle onlyTrashed
    const toggleOnlyTrashed = () => {
        setParams((prev) => ({ ...prev, onlyTrashed: !prev.onlyTrashed }));
    };

    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.packages.index'),
        values: params,
        only: ['packages'],
    });

    return (
        <AdminLayout>

            <Head title="Packages" />
            <Card>
                <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                    <CardHeader className="p-0">
                        <CardTitle>{params.onlyTrashed ? 'Deleted Packages' : 'Packages'}</CardTitle>

                    </CardHeader>
                    <div className="flex gap-2">
                        <Input
                            value={params?.search}
                            onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                            placeholder="Search..."
                        />
                        <div className="flex gap-2">
                            <Select value={params?.category} onValueChange={(e) => setParams({ ...params, category: e })}>
                                <SelectTrigger className="md:w-40">
                                    <SelectValue placeholder={params?.category ?? ""} />
                                </SelectTrigger>
                                <SelectContent>

                                    <SelectItem >All Categories</SelectItem>
                                    {categories.map(category => (
                                        <SelectItem key={category.id} value={category.slug}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Button asChild>
                                <Link href={route('admin.packages.create')}>
                                    <IconCirclePlusFill className="mr-2 size-4" />
                                    New
                                </Link>
                            </Button>
                            <Toggle onClick={toggleOnlyTrashed}>
                                <IconTrash className="mr-2 h-4 w-4" />
                                {params.onlyTrashed ? 'Back' : 'Trash'}
                            </Toggle>

                        </div>
                    </div>
                </div>
                <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Package</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {packages.map((pkg, index) => (
                                <TableRow key={pkg.id}>
                                    <TableCell>{meta.from + index}</TableCell>
                                    <TableCell className="min-w-32">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-32">
                                                <Image
                                                    skeletonHeight="40"
                                                    className="h-full w-full object-cover rounded"
                                                    src={`/images/${pkg.image}`}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-semibold">{pkg.name}</p>
                                                <span className='flex gap-1 text-xs items-center'><IconMoneybag className='w-3' /> {formatRupiah(pkg.price)}</span>
                                                <span className='flex gap-1 text-xs space-y-0 items-center'><IconSunrise className='w-3' />{pkg.day} Days</span>
                                                <div className="flex items-center">
                                                    {[...Array(5)].map((_, index) => (
                                                        <IconStar width={10} key={index} className={index < pkg.rate ? 'fill-current text-yellow-500' : 'text-gray-300'} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{pkg.category.name}</TableCell>
                                    <TableCell>{formatDateTime(pkg.created_at)}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <Button variant="outline" size="icon">  <IconDotsVertical className="size-4" /></Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    {!params.onlyTrashed && (
                                                        <>
                                                            <DropdownMenuItem>
                                                                <Link href={route('admin.packages.hotels.index', [pkg])}>
                                                                    {pkg.hotels_count ?? 0}  Hotels
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Link href={route('admin.packages.itineraries.index', pkg.id)}>{pkg.itineraries_count ?? 0} Itineraries</Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <Link href={route('admin.packages.galleries.index', [pkg])}>
                                                                    Galleries
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <Link href={route('admin.packages.videos.index', [pkg])}>
                                                                    Videos
                                                                </Link>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>

                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <Link href={route('admin.packages.edit', [pkg])}>
                                                                    Edit
                                                                </Link>
                                                            </DropdownMenuItem>

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
                                                                    title="Delete Package"
                                                                    description="Are you sure you want to delete this Package?"
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.packages.destroy', [pkg]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuGroup>
                                                        </>
                                                    )}
                                                    {params.onlyTrashed && (
                                                        <>

                                                            <DropdownMenuItem asChild>
                                                                <AlertAction
                                                                    trigger={
                                                                        <DropdownMenuItem
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            Restore
                                                                        </DropdownMenuItem>
                                                                    }
                                                                    title={'Restore ' + pkg.name}
                                                                    description="Are you sure you want to restore this Package?"
                                                                    action={() =>
                                                                        router.put(
                                                                            route('admin.packages.restore', [pkg]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem asChild>
                                                                <AlertAction
                                                                    trigger={
                                                                        <DropdownMenuItem
                                                                            onSelect={(e) => e.preventDefault()}
                                                                        >
                                                                            Force Delete
                                                                        </DropdownMenuItem>
                                                                    }
                                                                    title="Force Delete"
                                                                    description="Force delete this package? This action will permanently delete the package and all associated data, including bookings, payments, and others. This cannot be undone."
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.packages.force', [pkg]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuItem>
                                                        </>
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
        </AdminLayout >
    );
}
