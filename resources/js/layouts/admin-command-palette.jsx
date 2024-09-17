import { useEffect, useState } from 'react';
import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { router, usePage } from '@inertiajs/react';
import {
    IconDashboard,
    IconLogout,
    IconNotes,
    IconSettings,
} from '@irsyadadl/paranoid';
import { navLinks } from './admin-navlinks';

const cmdic = '!rounded-md !py-2 [&_svg]:!size-4 [&_svg]:text-muted-foreground [&_svg]:mr-2';

export function AdminCommandPalette({ open, setOpen }) {
    const { auth } = usePage().props;
    const [search, setSearch] = useState('');

    useEffect(() => {
        const down = (e) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        window.addEventListener('keydown', down);
        return () => window.removeEventListener('keydown', down);
    }, []);


    function searchHandler(value) {
        setSearch(value);
        debouncedSearch(value);
    }

    useEffect(() => {
        router.on('navigate', () => setOpen(false));
    }, []);

    return (
        <>
           <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput value={search} onValueChange={searchHandler} placeholder="Search..." />
                <CommandList className="p-2">
                    {navLinks.map((link) => (
                        <CommandItem
                            key={link.route}
                            className={cmdic}
                            onSelect={() => router.get(route(link.route))}
                        >
                            {link.icon}
                            {link.label}
                        </CommandItem>
                    ))}
                    <CommandItem className={cmdic} onSelect={() => router.post(route('logout'))}>
                        <IconLogout />
                        Log out
                    </CommandItem>
                </CommandList>
            </CommandDialog>
        </>
    );
}
