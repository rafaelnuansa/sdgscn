import React from 'react';
import { formatRupiah } from '@/lib/utils';
import { Image } from '@/components/image';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { IconStar } from '@irsyadadl/paranoid';
import moment from 'moment';

const SdgCard = ({ sdg }) => {
    return (
        <Link key={sdg.id} href={route('sdgs.show', sdg.slug)}>
         <div className="rounded-lg border bg-white shadow overflow-hidden flex flex-col h-full">
           
                {/* Card Image */} 
                <div className="relative bg-white overflow-hidden">
                    <Image
                        skeletonHeight="40"
                        className="aspect-[16/9] w-full object-cover"
                        src={`/storage/sdgs/${sdg.image}`}
                    />
                </div>
                {/* Card Content */}
                <div className="p-4">

                <p className="text-xs text-gray-600 dark:text-gray-300">{moment(sdg.created_at).format('d MMMM YYYY')}</p>
                    <h2 className="text-lg font-bold mb-3">{sdg.name}</h2>

                   
                </div>
            </div>
        </Link>
    );
}

export default SdgCard;
