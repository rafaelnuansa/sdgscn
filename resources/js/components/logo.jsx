import { cn } from '@/lib/utils';
import { Image } from './image';
import { usePage } from '@inertiajs/react';

export function Logo({ className, ...props }) {
    
    const { web_setting } = usePage().props;
    return (
        <Image src={`/storage/images/${web_setting?.website_logo}`} className={'max-h-[40px] sm:max-h-[40px] md:max-h-[70px] lg:max-h-[70px]'} />

    );
}
