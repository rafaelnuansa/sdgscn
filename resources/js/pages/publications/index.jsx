import React, { useState } from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb'; // Import breadcrumb component
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import Pagination from '@/shared/pagination';
import { Header } from '@/components/header';
import { buttonVariants } from '@/components/ui/button';

export default function PublicationIndex() {
    const { auth, publications, filters, sdgs } = usePage().props;

    // Set initial state for filters
    const [search, setSearch] = useState(filters.search || '');
    const [sdg, setSdg] = useState(filters.sdg || '');

    // Handle filter form submission
    const handleFilterSubmit = (e) => {
        e.preventDefault();
        // Send the search and SDG filter to the backend
        router.get('/publications', { search, sdg });
    };

    const handleReset = () => {
        setSearch(''); // Reset search field
        setSdg(''); // Reset SDG dropdown
        // Reload page without filters
        router.get('/publications', { search: '', sdg: '' });
    };

    return (
        <>
            <Head title="Publication" />

            <Header title={"Publication"} subtitle={'All research related to SDGs'} />
            <Container>

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: 'Publications', url: '/publications' },
                    ]}
                />

                <div className="mx-auto lg:py-14">

                    {/* Filter Form */}
                    <form onSubmit={handleFilterSubmit} className="mb-6 space-y-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Search publications or author name..."
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

                    <div className="md:col-span-12">
                        {publications.data.length > 0 ? (
                            <div className="space-y-6">
                                {publications.data.map((item) => (
                                    <div key={item.id} className="p-4 bg-gray-100 rounded-lg">
                                        <h3 className="text-xl font-semibold">{item.title}</h3>

                                        {/* Combine experts and year in one paragraph, conditionally add dot */}
                                        <p className="text-gray-500 mb-3">
                                            {item.experts && item.experts.length > 0
                                                ? item.experts.map(expert => expert.name).join(', ')
                                                : ''}
                                            {item.year && (item.experts && item.experts.length > 0 ? ` • ${item.year}` : item.year)}
                                        </p>

                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={buttonVariants('primary')}
                                            >
                                                View Publication
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>No publication found.</p>
                        )}


                       
                <div className="flex justify-center py-4">
                            <Pagination links={publications.links} />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

PublicationIndex.layout = (page) => <AppLayout children={page} />;
