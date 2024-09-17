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
import { IconChevronLeft, IconChevronRight, IconCirclePlusFill, IconDotsVertical, IconMoneybag, IconStar, IconSunrise, IconTrash, IconUpload } from '@irsyadadl/paranoid';

import { Input } from '@/components/ui/input';
import { useFilter } from '@/hooks/useFilter';
import { AlertAction } from '@/components/alert-action';
import { Video } from '@/components/video';

export default function Index({ auth, main_package, ...props }) {

    const { data: videos, meta, links } = props.videos;

    const [params, setParams] = useState(props.state);
    useFilter({
        route: route('admin.packages.videos.index' , main_package.id ),
        values: params,
        only: ['videos'],
    });

    return (
        <AdminLayout>

            <Head title="Videos" />
            <Card>
                <div className="flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center md:gap-y-0">
                    <CardHeader className="p-0">
                        <CardTitle>{'Videos'}</CardTitle>

                    </CardHeader>
                    <div className="flex gap-2">
                        <Input
                            value={params?.search}
                            onChange={(e) => setParams((prev) => ({ ...prev, search: e.target.value }))}
                            placeholder="Search..."
                        />
                        <div className="flex gap-2">
 

                            <Button asChild>
                                <Link href={route('admin.packages.videos.create' , main_package.id)}>
                                    <IconUpload className="mr-2 size-4" />
                                    Upload
                                </Link>
                            </Button>

                        </div>
                    </div>
                </div>
                <CardContent className="p-0 [&_td]:whitespace-nowrap [&_td]:px-6 [&_th]:px-6 [&_thead]:border-t">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Videos</TableHead>
                                <TableHead>Upload At</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {videos.map((video, index) => (
                                <TableRow key={video.id}>
                                    <TableCell>{meta.from + index}</TableCell>
                                    <TableCell className="min-w-32">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 w-32">
                                                <Video
                                                    skeletonHeight="40"
                                                    className="h-full w-full object-cover rounded"
                                                    src={`/storage/videos/${video.video}`}
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <p className="font-semibold">{video.title}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{formatDateTime(video.created_at)}</TableCell>
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
                                                                <Link href={route('admin.packages.videos.edit', [video.package_id, video.id])}>
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
                                                                    title="Delete"
                                                                    description="Are you sure you want to delete this Video?"
                                                                    action={() =>
                                                                        router.delete(
                                                                            route('admin.packages.videos.destroy', [video.package_id, video.id]),
                                                                            { preserveScroll: true },
                                                                        )
                                                                    }
                                                                />
                                                            </DropdownMenuGroup>
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
