import React from 'react';
import { formatRupiah } from '@/lib/utils';
import { Image } from '@/components/image';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { IconStar } from '@irsyadadl/paranoid';

const OverlayPackageCard = ({ paket }) => {
    return (
        <Link key={paket.id} href={route('packages.show', paket.slug)}>
            <div className="relative rounded-xl border overflow-hidden">
                {/* Card Image with Overlay */}
                <div className="relative overflow-hidden">
                    <Image
                        skeletonHeight="40"
                        className="aspect-[16/9] w-full object-cover"
                        src={`/images/${paket.image}`}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        {/* Card Content */}
                        <div className="text-white text-center">
                            <Badge variant={'outline'} className={'rounded mb-2 bg-white bg-opacity-20 text-white'}>{paket.category.name}</Badge>
                            <h2 className="text-lg font-semibold">{paket.name}</h2>
                            {/* Stars of Rating */}
                     
                            <p className="text-xs">{paket.description}</p>
                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-x-1">
                                    <Badge variant={'outline'} className={'rounded bg-white bg-opacity-20 text-white'}>{paket.day} Hari</Badge>
                                </div>
                                <p className="text-sm font-bold">{formatRupiah(paket.price)}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default OverlayPackageCard;
