import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb'; // Import komponen breadcrumb
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import PackageCard from '../home/package-card';
import Pagination from '@/shared/pagination';
import { Header } from '@/components/header';

export default function PackageIndex() {
    const { auth, packages } = usePage().props;
    return (
        <>
            <Head title="Packages" />


            <Header title={"Packages"} subtitle={'All packages'}></Header>
            <Container>

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: 'Packages', url: '/packages' },
                    ]}
                />

                <div className="mx-auto  lg:py-14">
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
        </>
    );
}

PackageIndex.layout = (page) => <AppLayout children={page} />;
