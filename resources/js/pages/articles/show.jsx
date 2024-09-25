import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Breadcrumb from "@/components/breadcrumb";
import { AppLayout } from "@/layouts/app-layout";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Image } from "@/components/image";
import moment from 'moment';

export default function ArticleShow() {
  const { article, recentPosts } = usePage().props;

  return (
    <>
      <Head title={article.title} />

      <Header
        title={article.title}
      />

      <Container>
        <Breadcrumb
          links={[
            { label: "Home", url: "/" },
            { label: "Articles", url: "/articles" },
            { label: article.title, url: `/articles/${article.slug}` },
          ]}
        />

        <div className="mx-auto lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Kolom Utama Artikel */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">

                {/* Gambar Artikel */}
                  <Image
                    skeletonHeight="40"
                    className="w-full h-auto max-h-[500px] shadow object-cover rounded-lg border shadow-lg"
                    src={`/storage/articles/${article.image}`}
                    alt={article.title}
                  />

                {/* Konten Artikel */}
                <div className="mt-6">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Recents Posts</h2>
              <ul>
                {recentPosts.map((post) => (
                  <li key={post.id} className="mb-4">
                    <a href={`/articles/${post.slug}`} className="font-semibold hover:underline">
                      {post.title}
                    </a>
                    <p className="text-sm text-gray-500">
                      {moment(post.created_at).format('DD MMMM YYYY')}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

ArticleShow.layout = (page) => <AppLayout children={page} />;
