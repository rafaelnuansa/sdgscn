import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from '@inertiajs/react';
import { Button, buttonVariants } from '@/components/ui/button';
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function TestimonialTable({ testimonials, handleTestimonialDelete }) {
    if (testimonials.length === 0) {
        return <p>No testimonials found</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>From</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {testimonials.length > 0 && testimonials.map((testimonial) => (
                    <TableRow key={testimonial.id}>
                   <TableCell>
                            <Avatar>
                                <div className="aspect-w-1 aspect-h-1">
                                    <AvatarImage  src={`/storage/testimonials/${testimonial.image}`}  alt={testimonial.name} className="h-full w-full rounded-lg object-cover" />
                                </div>
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>{testimonial.name}</TableCell>
                        <TableCell>{testimonial.from}</TableCell>
                        <TableCell>{formatDate(testimonial.created_at)}</TableCell>
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
                                            <Link href={route('admin.testimonials.edit', [testimonial])}>
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
                                                title="Delete Testimonial"
                                                description="Are you sure you want to delete this Testimonial?"
                                                action={() =>
                                                    handleTestimonialDelete(testimonial.id)
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
