
import { IconDateTime } from '@irsyadadl/paranoid';
import React from 'react';

const Timeline = ({ children }) => {
    return (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {children}
        </div>
    );
};

const TimelineItem = ({ day, description, items }) => {
    return (
        <>
            <div className="relative">
                <div className="md:flex items-center md:space-x-4 mb-3">
                    <div className="flex items-center">
                        {/* Icon */}
                        <IconDateTime className='mr-2' />
                        {/* Date */}
                        <time className="font-sans font-bold italic text-xl  md:w-28">
                            {day}
                        </time>
                    </div>
                    {/* Title */}
                    <div className=" ml-14">
                        <h2 className="font-bold">{description}</h2>
                    </div>

                </div>
                {/* Card */}
                {items.map((item, idx) => (
                   <div key={`${item.id}_${idx}`}  className="bg-gray-200 text-sm mb-2 dark:bg-slate-800 dark:text-white p-4 rounded border border-slate-200 dark:border-slate-900 text-gray-800 shadow ml-14 md:ml-44">
                     {item.description}
                    </div>
                ))}
            </div>
        </>
    );
};

export { Timeline, TimelineItem };
