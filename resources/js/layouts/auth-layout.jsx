import { FlashMessage } from '@/components/flash-message';
import {  Navigation } from './navigation';
import { Footer } from './footer';
export function AuthLayout({ children }) {
    return (
        <>

            <div className="min-h-screen">
                <Navigation />
                <FlashMessage />
                {children}
            </div>

            <Footer></Footer>
        </>
    );
}
