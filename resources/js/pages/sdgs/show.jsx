import React from "react";
import { Head, usePage } from "@inertiajs/react";
import Breadcrumb from "@/components/breadcrumb";
import { AppLayout } from "@/layouts/app-layout";
import { Container } from "@/components/container";
import { Header } from "@/components/header";
import { Image } from "@/components/image";
import moment from 'moment';

export default function SdgShow() {
  const { sdg } = usePage().props;

  return (
    <>
      <Head title={sdg.name} />

      <Header
        title={sdg.name}
        subtitle={`Published on ${moment(sdg.created_at).format('DD MMMM YYYY')}`}
      />

      <Container>
        <Breadcrumb
          links={[
            { label: "Home", url: "/" },
            { label: "Sdgs", url: "/sdgs" },
            { label: sdg.name, url: `/sdgs/${sdg.slug}` },
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
                    src={`/storage/sdgs/${sdg.image}`}
                    alt={sdg.name}
                  />

                {/* Konten Artikel */}
                <div className="mt-6">
                  <div
                    dangerouslySetInnerHTML={{ __html: sdg.content }}
                  />
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </Container>
    </>
  );
}

SdgShow.layout = (page) => <AppLayout children={page} />;
