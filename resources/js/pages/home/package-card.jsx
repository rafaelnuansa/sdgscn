import React from 'react';
import { formatRupiah } from '@/lib/utils';
import { Image } from '@/components/image';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { IconStar } from '@irsyadadl/paranoid';

const PackageCard = ({ paket }) => {
    return (
        <Link key={paket.id} href={route('packages.show', paket.slug)}>
            <div className="rounded-xl border overflow-hidden">
                {/* Card Image */}
                <div className="relative overflow-hidden">
                    <Image
                        skeletonHeight="40"
                        className="aspect-[16/9] w-full object-cover"
                        src={`/images/${paket.image}`}
                    />
                </div>
                {/* Card Content */}
                <div className="p-4">

                <Badge variant={'default'} className={'rounded mb-2'}>{paket.category.name}</Badge>
                    <h2 className="text-xl font-semibold">{paket.name}</h2>


                    <p className="text-sm text-gray-600 dark:text-gray-300">{paket.description}</p>

                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-x-1">

                            <Badge variant={'outline'} className={'rounded'}>{paket.day} Hari</Badge>

                        </div>

                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">{formatRupiah(paket.price)}</p>
                    </div>

                </div>
            </div>
        </Link>
    );
}

export default PackageCard;
