import { FlashMessage } from "@/components/flash-message";
import FloatWhatsapp from "@/components/floating-whatsapp";
// import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/layouts/footer";
import { Navigation } from "@/layouts/navigation";
import { Head, usePage } from "@inertiajs/react";

export function AppLayout({ children }) {
  const { web_setting } = usePage().props;
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/svg+xml"
          href={`/storage/images/${web_setting?.website_favicon}`}
        />
      </Head>
      <Navigation />
        <FlashMessage />
        <main>{children}</main>
        <Footer />
        <FloatWhatsapp />
    </>
  );
}
