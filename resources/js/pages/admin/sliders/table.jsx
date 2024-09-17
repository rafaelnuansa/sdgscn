// components/sliderTable.jsx
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


export default function SliderTable({ sliders }) {
 
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
                    <TableHead>Title</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sliders.map((slider) => (
                    <TableRow key={slider.id}>
                        <TableCell>
                            <Image  src={`/storage/sliders/${slider.image}`}  alt={slider.name} className="w-40 rounded-lg object-cover" />
                        </TableCell>
                        <TableCell>{slider.title}</TableCell>
                        <TableCell>{formatDate(slider.created_at)}</TableCell>
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
                                            <Link href={route('admin.sliders.edit', [slider])}>
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
                                                        route('admin.sliders.destroy', [slider]),
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

