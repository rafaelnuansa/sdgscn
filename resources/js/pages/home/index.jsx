import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import MetaTags from "@/components/meta-tags";
import { AppLayout } from "@/layouts/app-layout";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";
import Hero from "./hero";
import PartnerLogos from "@/components/partner-logos";
import ArticleCard from "../articles/article-card";
import { AcademicCapIcon, BookOpenIcon, DocumentTextIcon, LightBulbIcon } from "@heroicons/react/20/solid";

export default function Home() {
  const {
    latestArticles,
    sliders,
    partners,
    web_setting,
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
  {/* New Section: Experts, Publications, Research, Papers */}
  <div className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Explore Our Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Expert */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <AcademicCapIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Experts</h3>
              <p className="text-lg text-gray-600">
                List of the experts in SDGs Network.
              </p>
              <Link href="/experts" className="text-blue-600 mt-4 inline-block">View Experts</Link>
            </div>

            {/* Publication */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <BookOpenIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Publications</h3>
              <p className="text-lg text-gray-600">
                List of publications of SDGs-related activity worldwide.
              </p>
              <Link href="/publications" className="text-blue-600 mt-4 inline-block">View Publications</Link>
            </div>

            {/* Research */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <LightBulbIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Research</h3>
              <p className="text-lg text-gray-600">
                List of researches of SDGs-related activity worldwide.
              </p>
              <Link href="/research" className="text-blue-600 mt-4 inline-block">View Researches</Link>
            </div>

            {/* Paper */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <DocumentTextIcon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-bold mb-2">Papers</h3>
              <p className="text-lg text-gray-600">
                List of papers by SDGs researchers worldwide.
              </p>
              <Link href="/papers" className="text-blue-600 mt-4 inline-block">View Papers</Link>
            </div>

          </div>
        </Container>
      </div>

       {/* Section SDGs */}
       <div className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-10">Our SDGs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SDGs 1 */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <h3 className="text-xl font-bold mb-2">SDGs 1</h3>
              <p className="text-md font-semibold text-gray-700">No Poverty</p>
            </div>
            {/* SDGs 4 */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <h3 className="text-xl font-bold mb-2">SDGs 4</h3>
              <p className="text-md font-semibold text-gray-700">Quality Education</p>
            </div>
            {/* SDGs 5 */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <h3 className="text-xl font-bold mb-2">SDGs 5</h3>
              <p className="text-md font-semibold text-gray-700">Gender Equality</p>
            </div>
            {/* SDGs 16 */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <h3 className="text-xl font-bold mb-2">SDGs 16</h3>
              <p className="text-md font-semibold text-gray-700">Peace, Justice, and Strong Institutions</p>
            </div>
            {/* SDGs 17 */}
            <div className="bg-gray-100 p-6 text-center rounded-lg">
              <h3 className="text-xl font-bold mb-2">SDGs 17</h3>
              <p className="text-md font-semibold text-gray-700">Partnerships for the Goals</p>
            </div>
          </div>
        </Container>
      </div>



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

  {/* Section Become Our Partner */}
      <div className="bg-gray-50 border-b py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Become Our Partner</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join us in achieving sustainable development goals and make a real difference.
              Together, we can create a better future.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
            >
              Partner With Us
            </Link>
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
