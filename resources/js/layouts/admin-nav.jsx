
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button'
import { Link, usePage } from '@inertiajs/react';
import { IconBarsThree2, IconBarsThree3, IconBell, IconDashboard, IconHome, IconLink, IconLogout, IconPerson, IconRocket, IconSearch, IconSettings } from '@irsyadadl/paranoid'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader } from '@/components/custom/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import React, { useEffect, useState } from 'react'
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/logo';
import { ScrollArea } from '@/components/ui/scroll-area';
import { navLinks } from './admin-navlinks';
import { AsideLink } from './admin-sidebar';
import { Image } from '@/components/image';
import Notification from './admin-notification';
import { AdminCommandPalette } from './admin-command-palette';
import { LogoDark } from '@/components/logo-dark';

export default function AdminNav({ title }) {
    const { auth } = usePage().props;
    const [openSidebarMenu, setOpenSidebarMenu] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);

    const [openSearch, setOpenSearch] = useState(false);
    const toggleSidebarMenu = () => {
        setOpenSidebarMenu((prev) => !prev);
    };

    const toggleNotification = () => {
        setOpenNotification((prev) => !prev);
    };
    useEffect(() => {
        // Any additional effects when openSidebarMenu changes
    }, [openSidebarMenu, openNotification]);

    return (
        <> 
          <AdminCommandPalette open={openSearch} setOpen={setOpenSearch} />
            <div className="sticky top-0 z-20 -mx-4 mb-6 border-b bg-background sm:-mx-6">
                <nav className="flex items-center justify-between px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                        <Button onClick={toggleSidebarMenu} variant="link" size="icon" className="block focus:outline-none lg:hidden">
                            <IconBarsThree3 />
                        </Button>
                        <div
                            data-orientation="vertical"
                            role="none"
                            className="shrink-0 bg-border w-[1px] mx-4 h-6 lg:hidden"
                        />
                        <strong className='block focus:outline-none lg:hidden'>{title}</strong>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="text-muted-foreground transition duration-200 hover:text-foreground focus:outline-none">
                                <Avatar className="aspect-square size-8">
                                    <AvatarImage src={auth.user.gravatar} />
                                    <AvatarFallback>{auth.user.initials}</AvatarFallback>
                                </Avatar>
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
                                        href={route('admin.profile.index')}

                                    >
                                        <span className="flex gap-2 items-center justify-between ">
                                            <IconPerson className='w-4' /> Profile
                                        </span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="w-full">
                                    <Link href={route('home')}
                                    >
                                        <span className="flex gap-2 items-center justify-between ">
                                            <IconHome className='w-4' /> Go to website
                                        </span>
 
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild className="w-full">
                                    <Link href={route('logout')} as="button" method="post">
                                    <span className="flex gap-2 items-center justify-between ">
                                    <IconLogout className='w-4'/>
                                        Logout
                                     </span>
                                    </Link>

                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                    </div>
                </nav>
            </div>
            <Sheet open={openSidebarMenu} onOpenChange={setOpenSidebarMenu}>
                <SheetContent side="left" className="flex flex-col bg-custom-primary-theme border-0 inset-y-0 left-0 h-full max-w-80 min-h-screen w-[320px] overflow-y-auto overflow-x-hidden  p-0">

                <div className="sticky top-0 bg-custom-primary-theme p-5 shadow-sm ">
                    <Link className="flex shrink-0 items-center" href={route('admin.dashboard.index')}>
                    <Logo /> 
                    </Link>
                    <Button
                        size="icon"
                        className="relative mt-4 flex justify-between h-10 w-full items-center rounded-md border bg-background text-muted-foreground shadow-sm focus:outline-none"
                        variant="ghost"
                        onClick={() => setOpenSearch(true)}
                    >
                        <span className='text-left px-3'>
                            <IconSearch className='size-5 shrink-0' />
                        </span>
                        <span class="absolute right-4 text-sm">⌘ K</span>
                    </Button>
                </div>
                    <div>
                        <div className="flex bg-custom-primary-theme grow flex-col gap-y-5 overflow-y-auto px:0 md:px-6">

                            <nav className="flex flex-1 flex-col p-4 lg:p-0">
                                <ul className="flex flex-1 flex-col gap-y-1">
                                    {navLinks.map((navLink, index) => (
                                        <li key={index}>
                                            <AsideLink active={route().current(navLink.route)} href={route(navLink.route, navLink.slug)}>
                                                <span className='flex items-center gap-x-3'>
                                                    {navLink.icon} {navLink.label}
                                                </span>
                                            </AsideLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                        </div>

                    </div>
                </SheetContent>
                <SheetClose></SheetClose>
            </Sheet>
            <Notification setOpenNotification={setOpenNotification} openNotification={openNotification}></Notification>
        </>
    )
}
