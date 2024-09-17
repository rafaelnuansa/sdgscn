import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import MetaTags from "@/components/meta-tags";
import { AppLayout } from "@/layouts/app-layout";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import PackageCard from "./package-card";
import Hero from "./hero";
import PartnerLogos from "@/components/partner-logos";
import Testimonials from "@/components/testimonials"; // Import komponen testimonial
import OverlayPackageCard from "./overlay-package-card";
import ArticleCard from "../articles/article-card";

export default function Home() {
  const {
    latestArticles,
    sliders,
    partners,
    web_setting,
    testimonials,
  } = usePage().props;

  return (
    <div>
      <Head title="Beranda" />
      <MetaTags
        title={web_setting.website_name ?? "Laravel"}
        description={web_setting.website_description}
        url={route("home")}
      />
      <Hero slides={sliders} />
      <div className="latest-articles bg-background border-b py-20">
        <Container>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Recent News</h2>
            <Link
              href="/articles"
              className={
                buttonVariants({ variant: "default" }) + " font-extrabold"
              }
            >
              Lihat Semua Postingan
            </Link>
          </div>
          <div className="grid grid-cols gap-4 md:grid-cols-3 lg:grid-cols-4">
            {latestArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </Container>
      </div>


      {partners && partners.length > 0 && (
        <div className="bg-background p-20">
          <Container>
            <div className="flex flex-wrap items-center justify-center">
              <PartnerLogos partners={partners} />
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}

Home.layout = (page) => <AppLayout children={page} />;
