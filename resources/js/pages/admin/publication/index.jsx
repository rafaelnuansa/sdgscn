import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button, buttonVariants } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { formatDate } from '@/lib/utils';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconDotsVertical } from '@irsyadadl/paranoid';
import { AlertAction } from '@/components/alert-action';
import Pagination from '@/shared/pagination';

export default function PublicationIndex({ publications, sdgs, filters }) {
    // Set initial state for filters
    const [search, setSearch] = useState(filters.search || '');
    const [sdg, setSdg] = useState(filters.sdg || '');

    // Handle filter form submission
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Send the search and SDG filter to the backend
        router.get('/admin/publications', { search, sdg });
    };

    // Handle reset filters
    const handleReset = () => {
        setSearch(''); // Reset search field
        setSdg(''); // Reset SDG dropdown
        // Reload page without filters
        router.get('/admin/publications', { search: '', sdg: '' });
    };

    return (
        <>
            <Head title="Publications" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Publication List</CardTitle>
                        <CardDescription>
                            Here you can manage all publication related to SDGs.
                        </CardDescription>

                        <div className="mb-4">
                            <Link className={buttonVariants('primary')} href={route('admin.publications.create')}>
                                Add New Publication
                            </Link>
                        </div>


                        <div>
                            {/* Filter Form */}
                            <form onSubmit={handleFilterSubmit} className="mt-5 space-y-4">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <input
                                        type="text"
                                        placeholder="Search publication or author name..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
                                    />

                                    <select
                                        value={sdg}
                                        onChange={(e) => setSdg(e.target.value)}
                                        className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
                                    >
                                        <option value="">All SDGs</option>
                                        {sdgs.map((sdgItem) => (
                                            <option key={sdgItem.id} value={sdgItem.id}>
                                                {sdgItem.name}
                                            </option>
                                        ))}
                                    </select>

                                    <div className="flex gap-2">
                                        <button type="submit" className={buttonVariants('primary')}>
                                            Apply Filters
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleReset}
                                            className={buttonVariants('secondary')}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </CardHeader>
                    <CardContent className="p-0  [&_thead]:border-t">
 
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="max-w-[500px]">Title</TableHead>
                                    <TableHead>Created</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {publications.data.map((publication) => (
                                    <TableRow key={publication.id}>


                                        <TableCell className="overflow-hidden">
                                            <b className="line-clamp-2">{publication.title}</b>
                                            {publication.experts && publication.experts.length > 0
                                                ? publication.experts.map(expert => expert.name).join(', ')
                                                : ''}
                                            {publication.year && (publication.experts && publication.experts.length > 0 ? ` • ${publication.year}` : publication.year)}
                                        </TableCell>

                                        <TableCell>{formatDate(publication.created_at)}</TableCell>
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
                                                            <Link href={route('admin.publications.edit', [publication])}>
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
                                                                description="Are you sure you want to delete this?"
                                                                action={() =>
                                                                    router.delete(
                                                                        route('admin.publications.destroy', [publication]),
                                                                        { preserveScroll: true },
                                                                    )
                                                                }
                                                            />
                                                        </DropdownMenuGroup>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>

                    <CardFooter className="border-t text-sm text-muted-foreground">
                    <Pagination links={publications.links} />
                    </CardFooter>
                </Card>
            </Container>
        </>
    );
}

PublicationIndex.layout = (page) => <AdminLayout children={page} />;
