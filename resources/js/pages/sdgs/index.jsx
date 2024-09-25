import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb'; // Import komponen breadcrumb
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import Pagination from '@/shared/pagination';
import { Header } from '@/components/header';
import SdgCard from './sdg-card';

export default function SdgIndex() {
    const { auth, sdgs } = usePage().props;
    return (
        <>
            <Head title="Sdgs" />


            <Header title={"Sdgs"} subtitle={'Our Sdgs'}></Header>
            <Container>

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: 'Sdgs', url: '/sdgs' },
                    ]}
                />

                <div className="mx-auto  lg:py-14">
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {sdgs.data.length > 0 ? (
                                    sdgs.data.map((sdg) => (
                                        <SdgCard key={sdg.id} sdg={sdg} />
                                    ))
                                ) : (
                                    <p>No Sdgs found.</p>
                                )}
                            </div>

                            <div className="mt-2">
                                <Pagination links={sdgs.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

SdgIndex.layout = (page) => <AppLayout children={page} />;
