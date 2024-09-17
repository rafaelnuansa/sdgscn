import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

import {
    Breadcrumb as UIBreadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Breadcrumb({ links }) {
    return (
        <>

            <UIBreadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    {links.map((link, index) => (
                        <BreadcrumbItem key={index}>
                            {link.url ? (
                                <BreadcrumbLink asChild>
                                    <Link
                                        href={link.url}
                                        className="text-sm text-gray-500 dark:text-gray-300 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
                                    >
                                        {link.label}
                                    </Link>
                                </BreadcrumbLink>
                            ) : (
                                <span className="text-sm text-gray-500 dark:text-gray-300 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500">
                                    {link.label}
                                </span>
                            )}
                            {index !== links.length - 1 && <ChevronRight className="h-4 w-4 dark:dark:text-gray-300" />}
                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </UIBreadcrumb>
        </>
    );
}
