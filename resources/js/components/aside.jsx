import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import { IconBag, IconBag3, IconDashboard, IconHome, IconInvoice, IconInvoiceFill, IconPerson, IconRocket, IconSettings } from '@irsyadadl/paranoid';

export function Aside() {
    return (
        <>
            <nav className="hidden sm:block md:relative after:absolute after:bottom-[0.5px] after:left-0 after:right-0 after:top-auto after:h-px after:bg-border">
                <div className='hide-scrollbar relative z-20 mx-auto block max-w-screen-2xl overflow-x-auto px-4 sm:px-6'>
                    <ul className='flex items-center gap-x-8'>
                        <AsideLink href={route('dashboard')} >
                            <IconHome className='w-4' /> <span className="ml-2">Dashboard</span>
                        </AsideLink>
                        <AsideLink href={route('bookings.index')} >
                            <IconInvoice className='w-4' /> <span className="ml-2">Histori Bookings</span>
                        </AsideLink>
                        <AsideLink href={route('payments.index')}>
                            <IconInvoiceFill className='w-4' /> <span className="ml-2">Transaksi</span>
                        </AsideLink>
                        <AsideLink href={route('profile.index')}>
                            <IconPerson className='w-4' /> <span className="ml-2">Profile</span>
                        </AsideLink>
                    </ul>
                </div>
            </nav>

            <nav className="fixed sm:hidden bottom-0 z-50 w-full border-t border-foreground/10 bg-background/50 px-4 pb-2 backdrop-blur-lg">
                <ul className="flex w-full px-4 items-center justify-between gap-x-2">
                    <li>
                        <Link className='grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5' href={route('dashboard')} >
                            <IconHome /> <span className="sr-only">Dashboard</span>
                        </Link>
                    </li> <li>
                    <Link className='grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5' href={route('bookings.index')} >
                            <IconInvoice className='w-4' /> <span className="sr-only">Histori Bookings</span>
                        </Link>
                    </li>
                    <li>
                    <Link className='grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5' href={route('payments.index')}>
                            <IconInvoiceFill className='w-4' /> <span className="sr-only">Transaksi</span>
                        </Link>
                    </li>
                    <li>
                    <Link className='grid place-content-center rounded-lg focus:bg-transparent active:bg-transparent [&>svg]:size-5 [&>svg]:text-foreground/50 px-3 py-3.5' href={route('profile.index')}>
                            <IconPerson className='w-4' /> <span className="sr-only">Profile</span>
                        </Link>
                    </li>
                </ul>
            </nav>

        </>
    );
}

export function AsideLink({ active = false, ...props }) {
    return (
        <Link
            className={cn(
                'group flex relative z-10  whitespace-nowrap transition-all hover:border-b  py-3.5 text-sm border-foreground text-foreground',
            )}
            {...props}
        />
    );
}
