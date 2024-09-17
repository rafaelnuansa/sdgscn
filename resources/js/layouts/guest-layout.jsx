
import { Link } from '@inertiajs/react';
import { Card } from '@/components/ui/card';
import { LogoDark } from '@/components/logo-dark';

export function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <LogoDark className="h-10 w-10" />
                </Link>
            </div>

            <Card className="mt-6 w-full max-w-md p-6">{children}</Card>
        </div>
    );
}
