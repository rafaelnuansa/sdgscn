import { cn } from '@/lib/utils';
import { Image } from './image';
import { usePage } from '@inertiajs/react';

export function LogoDark({ className, ...props }) {
    
    const { web_setting } = usePage().props;
    return (
       
        <Image src={`/storage/images/${web_setting?.website_logo_dark}`} className={'max-w-[180px] mr-2'} />

    );
}
