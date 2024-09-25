import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb'; // Import komponen breadcrumb
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import { Header } from '@/components/header';
import ExpertCard from './expert-card';
import { router } from '@inertiajs/react'; // Import router for navigation
import Pagination from '@/shared/pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function SdgIndex() {
    const { experts } = usePage().props;
    const [search, setSearch] = useState(''); // State for search input

    const handleSearch = (e) => {
        e.preventDefault();
        // Redirect to the same page with search query
        router.get(route('experts.index'), { search });
    };

    const handleReset = () => {
        setSearch(''); // Clear the search input
        router.get(route('experts.index')); // Redirect to the index without search
    };

    return (
        <>
            <Head title="Experts" />

            <Header title={"Our Experts"} />
            <Container >

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: 'Experts', url: '/experts' },
                    ]}
                />

                <div className="mx-auto py-20">
                    {/* Search Form */}
                    <form onSubmit={handleSearch} className="mb-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <Input
                                type="text"
                                placeholder="Search experts name..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="p-2 border border-gray-300 rounded-md w-full md:w-1/3"
                            />
                                <div className="flex gap-2">
                                    
                            <Button type="submit" className="ml-2 p-2">Search</Button>
                            <Button type="button" onClick={handleReset} className="p-2">
                                Reset
                            </Button>
                                </div>
                        </div>
                    </form>

                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {experts.data.length > 0 ? (
                                    experts.data.map((expert) => (
                                        <ExpertCard key={expert.id} expert={expert} />
                                    ))
                                ) : (
                                    <p>No Experts found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-4">
                    <Pagination links={experts.links} />
                </div>
            </Container>
        </>
    );
}

SdgIndex.layout = (page) => <AppLayout children={page} />;
