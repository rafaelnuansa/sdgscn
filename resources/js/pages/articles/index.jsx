import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import Breadcrumb from '@/components/breadcrumb'; // Import komponen breadcrumb
import { AppLayout } from '@/layouts/app-layout';
import { Container } from '@/components/container';
import Pagination from '@/shared/pagination';
import { Header } from '@/components/header';
import ArticleCard from './article-card';

export default function ArticleIndex() {
    const { auth, articles } = usePage().props;
    return (
        <>
            <Head title="Articles" />


            <Header title={"Articles"} subtitle={'All packages'}></Header>
            <Container>

                <Breadcrumb
                    links={[
                        { label: 'Home', url: '/' },
                        { label: 'Articles', url: '/articles' },
                    ]}
                />

                <div className="mx-auto  lg:py-14">
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                {articles.data.length > 0 ? (
                                    articles.data.map((article) => (
                                        <ArticleCard key={article.id} article={article} />
                                    ))
                                ) : (
                                    <p>No Articles found.</p>
                                )}
                            </div>

                            <div className="mt-2">
                                <Pagination links={articles.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

ArticleIndex.layout = (page) => <AppLayout children={page} />;
