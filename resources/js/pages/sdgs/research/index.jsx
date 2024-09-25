import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb'; // Import komponen breadcrumb
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import Pagination from '@/shared/pagination';
import { Header } from '@/components/header';

export default function ResearchIndex() {
    const { auth, research } = usePage().props;
    
    return (
        <>
            <Head title="Research" />

            <Header title={"Research"} subtitle={'All research related to SDGs'}></Header>
            <Container>

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: 'Sdgs', url: '/sdgs' },
                        { label: 'Research', url: '/sdgs/research' },
                    ]}
                />

                <div className="mx-auto lg:py-14">
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-12">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {research.data.length > 0 ? (
                                    research.data.map((item) => (
                                        <div key={item.id} className="p-4 bg-white shadow rounded-lg">
                                            <h3 className="text-xl font-semibold">{item.title}</h3>
                                            <p className="text-gray-500">Author: {item.author}</p>
                                            <p className="text-gray-500">Year: {item.year || 'N/A'}</p>
                                            {item.link && (
                                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                                    View Research
                                                </a>
                                            )}
                                        </div>
                                    ))
                                ) : (
                                    <p>No research found.</p>
                                )}
                            </div>

                            <div className="mt-2">
                                <Pagination links={research.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

ResearchIndex.layout = (page) => <AppLayout children={page} />;
