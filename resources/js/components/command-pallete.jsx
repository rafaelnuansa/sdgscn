import { useCallback, useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { CommandDialog, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { router, usePage } from '@inertiajs/react';
import {
    IconBackpack,
    IconCirclePerson,
    IconDashboard,
    IconHome,
    IconLogin,
    IconLogout,
    IconNotes,
    IconPerson,
    IconSettings,
} from '@irsyadadl/paranoid';
import axios from 'axios';
import { formatRupiah } from '@/lib/utils';
import { Image } from './image';

const cmdic = '!rounded-md !py-2 [&_svg]:!size-4 [&_svg]:text-muted-foreground [&_svg]:mr-2';

export function CommandPalette({ open, setOpen }) {
    const { auth } = usePage().props;
    const [results, setResults] = useState([]);
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

    const debouncedSearch = useCallback(
        debounce(async (value) => {
            const { data } = await axios.get(
                route('article.search', {
                    search: value,
                }),
            );
            setResults(data);
        }, 500),
        [],
    );

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
                    {results.length > 0 ? ( 
                        results.map((result) => (
                            <CommandItem className={cmdic} key={result.id} onSelect={() => router.get(result.href)}>
                                <Image src={result.image} alt={result.name} className="w-8 h-8 rounded-full mr-2" />
                                <div className="flex flex-col">
                                    <span>{result.name}</span>
                                    <span className="text-xs text-gray-500">{formatRupiah(result.price)}</span>
                                </div>
                            </CommandItem>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-center text-sm text-gray-500">
                            Pencarian Posts
                        </div>
                    )}
                 
                        <>
                            <CommandItem className={cmdic} onSelect={() => router.get(route('home'))}>
                                <IconHome />
                                Home
                            </CommandItem>
                            <CommandItem className={cmdic} onSelect={() => router.get(route('articles.index'))}>
                                <IconNotes />
                                Articles
                            </CommandItem>
                        </>
                </CommandList>
            </CommandDialog>
        </>
    );
}
