import React, { useState } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AdminLayout } from '@/layouts/admin-layout';
import { formatRupiah } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';

import { Toggle } from '@/components/ui/toggle';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Edit, Trash } from 'lucide-react'; // Import icons as needed
import { IconChevronLeft, IconChevronRight, IconCirclePlusFill, IconTrash, IconDotsVertical, IconOpenLink, IconStar } from '@irsyadadl/paranoid';
import { Image } from '@/components/image';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { AlertAction } from '@/components/alert-action';

export default function PageIndex({ auth, ...props }) {

    const { data: pages, meta, links } = props.pages;

    const toggleOnlyTrashed = () => {
        setParams((prev) => ({ ...prev, onlyTrashed: !prev.onlyTrashed }));
    };

    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.pages.index'),
        values: params,
        only: ['pages'],
    });

    return (
        <>

            <Head title="Pages" />
            <Card>
                <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                    <CardHeader className="p-0">
                        <CardTitle>{params.onlyTrashed ? 'Deleted Pages' : 'Pages'}</CardTitle>
                    </CardHeader>
                    <div className="flex max-w-md flex-col gap-2 md:flex-row">
                        <Input
                            value={params?.search}
                            onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                            placeholder="Search..."
                        />
                        <div className="grid grid-cols-2 gap-x-2 md:flex">

                            <Button asChild>
                                <Link href={route('admin.pages.create')}>
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
                                <TableHead>Page</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pages.map((page, index) => (
                                <TableRow key={page.id}>
                                    <TableCell>{meta.from + index}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">

                                            <div className="ml-4">
                                                <p className="font-semibold">{page.title}</p>
                                                <p>{page.slug}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{page.created_at}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-end">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <IconDotsVertical className="size-4" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end" className="w-48">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuSeparator />    
                                               

                                                    {!params.onlyTrashed && (
                                                        <>
                                                               <DropdownMenuItem asChild>
                                                        <a target='_blank' href={route('pages.show', [page.slug])}>
                                                            Show
                                                        </a>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={route('admin.pages.edit', [page])}>
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
                                                            title="Delete Page"
                                                            description="Are you sure you want to delete this Page?"
                                                            action={() =>
                                                                router.delete(
                                                                    route('admin.pages.destroy', [page]),
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
                                                                    title={'Restore ' + page.title}
                                                                    description="Are you sure you want to restore this Page?"
                                                                    action={() =>
                                                                        router.put(
                                                                            route('admin.pages.restore', [page]),
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
                                                                    description="Are you sure to delete permanently this page?"
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.pages.force', [page]),
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
        </>
    );
}

PageIndex.layout = (page) => <AdminLayout title="Setting" children={page} />;
