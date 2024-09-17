import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { IconSearch } from '@irsyadadl/paranoid';

export default function Search({ URL, placeholder }) {
    const [search, setSearch] = useState('');

    const searchHandler = (e) => {
        e.preventDefault();
        router.get(`${URL}?q=${search}`);
    };

    return (
        <>
            <form onSubmit={searchHandler} className="w-full ">
                <div className="flex items-center gap-3 py-2">
                    <Input type="text" placeholder={placeholder} value={search} onChange={(e) => setSearch(e.target.value)} />
                    <Button variant="outline" type="submit"><IconSearch className='w-4 mr-2'/> Search</Button>
                </div>
            </form>
        </>
    );
}
