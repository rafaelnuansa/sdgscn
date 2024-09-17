import { Logo } from '@/components/logo';
import { usePage } from '@inertiajs/react';
export function Footer() {
    const { web_setting } = usePage().props;
    return (
        <footer className="bg-custom-primary-theme" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto container px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="flex flex-col items-center space-y-8">
                    <Logo className="h-10 text-white" />
                    <p className="text-sm leading-6 text-white">{web_setting?.website_address}</p>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 text-center">
                    <p className="text-xs leading-5 text-white">&copy; {new Date().getFullYear()} {web_setting.website_name}, All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
