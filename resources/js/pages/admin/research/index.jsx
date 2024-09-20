import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { AdminLayout } from '@/layouts/admin-layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function ResearchIndex({ researches }) {
    return (
        <>
            <Head title="Research Index" />
            <Container>
                <Card>
                    <CardHeader>
                        <CardTitle>Research List</CardTitle>
                        <CardDescription>
                            Here you can manage all research related to SDGs.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="mb-4">
                            <Link href={route('admin.research.create')}>
                                <Button variant="primary">Add New Research</Button>
                            </Link>
                        </div>
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Title</th>
                                    <th className="px-4 py-2">Year</th>
                                    <th className="px-4 py-2">Author</th>
                                    <th className="px-4 py-2">Link</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {researches.data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="border px-4 py-2">{item.title}</td>
                                        <td className="border px-4 py-2">{item.year}</td>
                                        <td className="border px-4 py-2">{item.author}</td>
                                        <td className="border px-4 py-2">
                                            {item.link ? (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    View Link
                                                </a>
                                            ) : (
                                                'N/A'
                                            )}
                                        </td>
                                        <td className="border px-4 py-2">
                                            <Link href={route('admin.research.edit', item.id)} className="text-blue-600 hover:underline">
                                                Edit
                                            </Link>
                                            <Link
                                                href={route('admin.research.destroy', item.id)}
                                                method="delete"
                                                className="text-red-600 hover:underline ml-2"
                                                data-confirm="Are you sure you want to delete this research?"
                                            >
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </CardContent>

                    <CardFooter className="justify-between border-t pt-6 text-sm text-muted-foreground">
                   
                </CardFooter>
                </Card>
            </Container>
        </>
    );
}

ResearchIndex.layout = (page) => <AdminLayout children={page} />;
