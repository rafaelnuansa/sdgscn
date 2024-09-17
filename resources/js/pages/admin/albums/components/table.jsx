// components/albumTable.jsx
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, usePage } from '@inertiajs/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Image } from '@/components/image';
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


export default function AlbumTable({ albums }) {
 
    const truncateString = (str, num) => {
        if (str.length <= num) {
            return str;
        }
        return str.slice(0, num) + '...';
    };

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Album</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {albums.map((album) => (
                    <TableRow key={album.id}>
                        <TableCell>
                            <Image  src={`/storage/albums/${album.image}`}  alt={album.name} className="w-40 rounded-lg object-cover" />
                        </TableCell>
                        <TableCell>{truncateString(album.name, 40)}</TableCell>
                        <TableCell>{formatDate(album.created_at)}</TableCell>
                        <TableCell>
                            <div className="flex justify-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                      <Button variant="outline" size="icon">  <IconDotsVertical className="size-4" /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <Link href={route('admin.albums.show', [album])}>
                                                Gallery
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={route('admin.albums.edit', [album])}>
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
                                                        route('admin.albums.destroy', [album]),
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
    );
}

