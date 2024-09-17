import { FlashMessage } from '@/components/flash-message';
import { Container } from '@/components/container';
import { Toaster } from '@/components/ui/sonner';
import { Aside } from '@/components/aside';
import { Navigation } from './navigation';
import { Footer } from './footer';

export function UserLayout({ title, children }) {
    return (
        <div >
            <FlashMessage />
            <Toaster />
            <Navigation></Navigation>
            <Aside />
            <Container>
                <main className='mt-8 mb-10'>
                    {children}
                </main>
            </Container>
            <Footer/>
        </div>
    );
}
