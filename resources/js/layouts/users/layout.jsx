import { FlashMessage } from '@/components/flash-message';
import { Sidebar } from './sidebar';
// import { Toaster } from '@/components/ui/sonner';
import Navbar from './navbar';
import { Head, usePage } from '@inertiajs/react';

export function Layout({ children }) {
    
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
            <div className="mx-auto">
                <div className='min-h-screen bg-muted/20' >
                    <Sidebar />
                    <div className='lg:pl-72'>
                        <div className='min-h-screen border-transparent bg-muted/20 px-4 pb-4 pr-4 sm:px-4 lg:border-border lg:px-6 lg:pb-6'>
                            <Navbar />
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <FlashMessage />
            {/* <Toaster /> */}
        </>
    );
}
