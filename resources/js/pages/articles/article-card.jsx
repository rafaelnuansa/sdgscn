import React from 'react';
import { formatRupiah } from '@/lib/utils';
import { Image } from '@/components/image';
import { Link } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge';
import { IconStar } from '@irsyadadl/paranoid';
import moment from 'moment';

const ArticleCard = ({ article }) => {
    return (
        <Link key={article.id} href={route('articles.show', article.slug)}>
         <div className="rounded-lg border bg-white shadow overflow-hidden flex flex-col h-full">
           
                {/* Card Image */} 
                <div className="relative bg-white overflow-hidden">
                    <Image
                        skeletonHeight="40"
                        className="aspect-[16/9] w-full object-cover"
                        src={`/storage/articles/${article.image}`}
                    />
                </div>
                {/* Card Content */}
                <div className="p-4">

                <p className="text-xs text-gray-600 dark:text-gray-300">{moment(article.created_at).format('d MMMM YYYY')}</p>
                    <h2 className="text-lg font-bold mb-3">{article.title}</h2>

                   
                </div>
            </div>
        </Link>
    );
}

export default ArticleCard;
