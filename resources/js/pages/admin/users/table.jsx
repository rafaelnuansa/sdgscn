// components/UserTable.jsx
import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from '@inertiajs/react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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


export default function UserTable({ users, handleUserDelete }) {
    if (users.length === 0) {
        return <p>No users found</p>;
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Avatar</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.length > 0 && users.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>
                            <Avatar>
                                <div className="aspect-w-1 aspect-h-1">
                                    <AvatarImage src={user.gravatar} alt={user.name} className="h-full w-full rounded-lg object-cover" />
                                </div>
                                <AvatarFallback>{user.initial}</AvatarFallback>
                            </Avatar>
                        </TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.is_admin ? 'Admin' : 'Customer'}</TableCell>
                        <TableCell>{formatDate(user.created_at)}</TableCell>
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
                                            <Link href={route('admin.users.edit', [user])}>
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
                                                title="Delete User"
                                                description="Are you sure you want to delete this User?"
                                                action={() =>
                                                    handleUserDelete(user.id)
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

