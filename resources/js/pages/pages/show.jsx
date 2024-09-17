import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { AppLayout } from '@/layouts/app-layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';

export default function PackageShow() {
    const { page } = usePage().props;
    return (
        <>
            <Head title={page.title}>
                <meta name="keywords" content={page.seo_keywords ?? page.title} />
                <meta name="description" content={page.seo_description ?? page.title} />
            </Head>
            <Container>
                <Card className="my-10 border-0">
                    <CardHeader>
                        <CardTitle>{page.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='prose lg:prose-md max-w-full dark:prose-invert leading-5' dangerouslySetInnerHTML={{ __html: page.content }} />
                    </CardContent>
                </Card>
            </Container>
        </>
    );
}

PackageShow.layout = (page) => <AppLayout children={page} />;
