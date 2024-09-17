import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Container } from '@/components/container';
import PackageCard from '../home/package-card';
import { AppLayout } from '@/layouts/app-layout';
import { Header } from '@/components/header';
import Breadcrumb from '@/components/breadcrumb';
import Pagination from '@/shared/pagination';
import Search from '@/shared/search';

export default function PackageCategory() {

    const { category, packages } = usePage().props;
    console.log(packages);
    return (
        <div>
            <Head title={`${category.name} Packages`} />
            <Header  title={`${category.name}`} subtitle={'Paket berdasarkan kategori ' + category.name}></Header>
            <Container>

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: category.name, url: route('packages.category', category.slug)},
                    ]}
                />

                    <div className="mx-auto py-10 sm:px-6 lg:px-8 lg:py-14">
                        <div className="grid gap-10 md:grid-cols-12">
                            <div className="md:col-span-12">
                                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {packages.data.length > 0 ? (
                                            packages.data.map((paket) => (
                                                <PackageCard key={paket.id} paket={paket} />
                                            ))
                                        ) : (
                                            <p>No Packages found.</p>
                                        )}
                                    </div>

                                <div className="mt-2">
                                    <Pagination links={packages.links} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
        </div>
    );
};
PackageCategory.layout = (page) => <AppLayout children={page} />;

