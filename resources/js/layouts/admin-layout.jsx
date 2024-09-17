import { FlashMessage } from '@/components/flash-message';
import { AsideAdmin } from './admin-sidebar';
import { Toaster } from '@/components/ui/sonner';
import AdminNav from './admin-nav';
import { Head, usePage } from '@inertiajs/react';
import { RecoilRoot } from 'recoil';

export function AdminLayout({ children }) {
    
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
                    <AsideAdmin />
                    <div className='lg:pl-72'>
                        <div className='min-h-screen border-l border-transparent bg-muted/20 px-4 pb-4 pr-4 sm:px-4 lg:border-border lg:px-6 lg:pb-6'>
                            <AdminNav />
                            <RecoilRoot>
                              
                            {children}

                            </RecoilRoot>
                        </div>
                    </div>
                </div>
            </div>

            <FlashMessage />
            <Toaster />
        </>
    );
}
