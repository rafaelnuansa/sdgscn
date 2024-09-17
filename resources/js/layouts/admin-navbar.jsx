import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Link, router, usePage } from '@inertiajs/react';
import {
    ChevronDown,
    GaugeIcon,
    PowerIcon,
    Settings2Icon,
    BookIcon
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { IconCart, IconDashboard, IconRocket, IconSearch, IconSettings, IconArrowRight, IconBell, IconLogout } from '@irsyadadl/paranoid';
import { CommandPalette } from '@/components/command-pallete';
import { Logo } from '@/components/logo';
import { useMediaQuery } from 'usehooks-ts'; // Import useMediaQuery
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Label } from '@/components/ui/label';

const navLinkClasses = 'text-sm items-center tracking-tight font-medium inline-flex px-2 py-3 transition-colors duration-300';
const navLinks = [
    { label: 'Dashboard', route: 'admin.dashboard.index' },
    { label: 'Bookings', route: 'admin.bookings.index' },
    { label: 'Users', route: 'admin.users.index' },
];

export default function AdminNavbar() {
    const { auth } = usePage().props;
    const [open, setOpen] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px)'); // Use useMediaQuery to determine mobile view

    return (
        <>
            <CommandPalette open={openSearch} setOpen={setOpenSearch} />

            {!isMobile && ( // Render desktop navigation if not mobile view
                <nav className="sticky top-0 z-30 hidden border-b border-foreground/10 bg-background py-2 transition duration-500 ease-in-out md:block">
                    <div className="flex mx-auto container justify-between">
                        <div className="flex items-center">
                            <Link href={route('admin.dashboard.index')} className="mr-4 flex text-2xl justify-between ">
                                <IconDashboard className='mt-1 mr-2' />
                            </Link>
                            {navLinks.map((navLink, index) => (
                                <NavLink key={index} active={route().current(navLink.route, navLink.slug)} href={route(navLink.route, navLink.slug)}>
                                    {navLink.label}
                                </NavLink>
                            ))}
                            <DropdownMenu>
                                <DropdownMenuTrigger className={cn(navLinkClasses)}>
                                    Master <ChevronDown className="ml-1 w-2" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>

                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.categories.index')}>
                                            Categories
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.hotels.index')}>
                                            Hotels
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.packages.index')}>
                                            Packages
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.pages.index')}>
                                            Pages
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={cn(navLinkClasses)}>
                                    Settings <ChevronDown className="ml-1 w-2" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>

                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.sliders.index')}>
                                            Sliders
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.home_contents.index')}>
                                            Home Contents
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.settings.index')}>
                                            Web Setting
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('admin.menus.index')}>
                                            Menu Setting
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </div>

                        <div className="flex items-center">
                            <Button
                                size="icon"
                                className="size-8 mr-2 rounded-full [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                variant="ghost"
                                onClick={() => setOpenSearch(true)}
                            >
                                <IconSearch />
                            </Button>
                            <Button
                                size="icon"
                                className="size-8 mr-2 rounded-full [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                variant="ghost"
                                onClick={() => setOpenNotification(true)}
                            >
                                <IconBell />
                            </Button>
                            <div className="mx-4 h-8 w-px bg-gray-200 dark:bg-gray-800" />
                            {auth.user ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none">
                                        <div className='flex items-center justify-between space-x-4'>
                                            <div className='flex items-center space-x-4'>
                                                <Avatar className="size-6 sm:size-8">
                                                    <AvatarImage src={auth.user.gravatar} />
                                                    <AvatarFallback>{auth.user.initials}</AvatarFallback>
                                                </Avatar>
                                                <div className='text-left mt-1'>

                                                    <p className='text-xs font-medium leading-none'>{auth.user.name}</p>
                                                    <p className=" text-xs text-muted-foreground">
                                                        {auth.user.email}
                                                    </p>
                                                </div>
                                            </div></div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56" align="end">
                                        <DropdownMenuLabel className="space-y-0.5">
                                            <Label>{auth.user.name}</Label>
                                            <span className="block text-sm text-muted-foreground">
                                                {auth.user.email}
                                            </span>
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild>
                                            <Link

                                                className="flex items-center justify-between [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                                href={route('admin.dashboard.index')}
                                            >
                                                Admin Panel
                                                <IconDashboard />
                                            </Link>

                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link

                                                className="flex items-center justify-between [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                                href={route('dashboard')}
                                            >
                                                Dashboard
                                                <IconRocket />
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link
                                                href={route('bookings.index')}
                                                className="flex items-center justify-between [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                            >
                                                Bookings
                                                <IconCart />
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link
                                                href={route('profile.edit')}
                                                className="flex items-center justify-between [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                            >
                                                Settings
                                                <IconSettings />
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild className="w-full">
                                            <Link href={route('home')} className="flex items-center justify-between [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                            >
                                                Go to website
                                                <IconArrowRight />
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem asChild className="w-full">
                                            <Link href={route('logout')} as="button" method="post">
                                                Logout
                                                <IconLogout />
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <>
                                    <Link className={buttonVariants({ variant: 'outline' }) + ' mr-2'} href={route('login')}>Masuk</Link>
                                    <Link className={buttonVariants({ variant: 'default' })} href={route('register')}>Daftar</Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            )}
            {isMobile && (
                <nav className="sticky top-0 z-40 flex w-full items-center justify-between border-b bg-background px-4 py-3 backdrop-blur-lg border-foreground/10">

                    <Link href="/" className="mr-4 flex justify-between">
                        <IconDashboard className='mr-2' />
                    </Link>
                    <div className="inline-flex">
                        <Button
                            size="icon"
                            className="size-8 mr-2 rounded-full [&_svg]:size-4 [&_svg]:text-muted-foreground"
                            variant="ghost"
                            onClick={() => setOpenSearch(true)}
                        >
                            <IconSearch />
                        </Button>
                        <Button className="ml-2 h-8" size="icon" variant="secondary" onClick={() => setOpen(true)}>
                            <Avatar className="size-6 sm:size-8">
                                <AvatarImage src={auth.user.gravatar} />
                                <AvatarFallback>{auth.user.initials}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </div>
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetContent side="right">
                            <Link href="/" className="mr-4 mb-4 flex items-center">
                                <IconDashboard className='mr-2' /> <h2>Admin Panel</h2>
                            </Link>
                            <div className="space-y-2">
                                <div className="flex items-center gap-x-1">
                                    <Button
                                        size="icon"
                                        className="size-8 rounded-full [&_svg]:size-4 [&_svg]:text-muted-foreground"
                                        variant="ghost"
                                        onClick={() => setOpenSearch(true)}
                                    >
                                        <IconSearch />
                                    </Button>
                                </div>
                                {auth.user ? (
                                    <div className="mt-4">
                                        <Link
                                            className={`${buttonVariants({ variant: 'outline' })} mb-2 block mr-2`}
                                            href={auth.user.is_admin ? route('admin.dashboard.index') : route('dashboard')}
                                        >
                                            Dashboard
                                        </Link>
                                        <Link className={buttonVariants({ variant: 'outline' }) + ' mb-2 block mr-2'} href={route('bookings.index')}>
                                            Bookings
                                        </Link>
                                        <Link className={buttonVariants({ variant: 'outline' }) + ' mb-2 block mr-2'} href={route('profile.edit')}>
                                            Settings
                                        </Link>
                                        <Button
                                            className="w-full"
                                            variant="outline"
                                            onClick={() => router.post(route('logout'))}
                                        >
                                            Log out
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="mt-4">
                                        <Link className={buttonVariants({ variant: 'outline' }) + ' mb-2 block mr-2'} href={route('login')}>
                                            Masuk
                                        </Link>
                                        <Link className={buttonVariants({ variant: 'default' }) + ' mb-2 block mr-2'} href={route('register')}>
                                            Daftar
                                        </Link>
                                    </div>
                                )}
                                <DropdownMenu>
                                    <DropdownMenuTrigger className={cn(navLinkClasses)}>
                                        Master <ChevronDown className="ml-1" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>

                                        <DropdownMenuItem asChild>
                                            <Link href={route('admin.categories.index')}>
                                                Categories
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={route('admin.hotels.index')}>
                                                Hotels
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={route('admin.hotels.index')}>
                                                Packages
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {navLinks.map((navLink, index) => (
                                    <NavLinkResponsive key={index} active={route().current(navLink.route)} href={route(navLink.route, navLink.slug)}>
                                        {navLink.label}
                                    </NavLinkResponsive>
                                ))}

                            </div>
                        </SheetContent>
                    </Sheet>
                </nav>
            )}
        </>
    );
}

export function NavLink({ active, children, href }) {
    return <Link className={cn(navLinkClasses, active)} href={href}>{children}</Link>;
}

export function NavLinkResponsive({ active, children, href }) {
    return (
        <Link
            href={href}
            className={cn('flex items-center rounded px-2 py-2 text-sm hover:bg-accent', active ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground')}
        >
            {children}
        </Link>
    );
}
