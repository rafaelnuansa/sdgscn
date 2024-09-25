import React from 'react';
import { Image } from '@/components/image';
import { Link } from '@inertiajs/react';
const ExpertCard = ({ expert }) => {
    return (
        <a target='_blank' key={expert.id} href={expert.link} className="block">
            <div className="rounded-lg  bg-white  overflow-hidden flex flex-col h-full  duration-300">
                <div className="relative flex justify-center bg-white p-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
                        <Image
                            skeletonHeight="40"
                            className="object-cover w-full h-full"
                            src={`/storage/experts/${expert.image}`}
                        />
                    </div>
                </div>

                {/* Card Content */}
                <div className="p-4 text-center">
                    <h2 className="text-lg font-bold text-gray-800">{expert.name}</h2>
                    <p className="text-sm text-gray-500 mt-2">{expert.description || ''}</p>
                </div>
            </div>
        </a>
    );
}

export default ExpertCard;
