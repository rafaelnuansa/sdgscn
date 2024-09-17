import { useState } from 'react';
import ReactPlayer from 'react-player';
import LazyLoad from 'react-lazy-load';
import { Skeleton } from './ui/skeleton';

export function Video({ className, title, height, src, width }) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleVideoError = () => {
        setError(true);
        setLoading(false);
    };

    const handleVideoLoad = () => {
        setLoading(false);
    };

    return (
        <LazyLoad height={height} width={width} threshold={0.95}>
            {error ? (
                <Skeleton className={className + ' bg-gray-300'} />
            ) : (
                <div className={className} style={{ display: loading ? 'none' : 'block', width, height }}>
                    <ReactPlayer
                        url={src}
                        title={title}
                        onReady={handleVideoLoad}
                        onError={handleVideoError}
                        width="100%"
                        height="100%"
                        controls
                        playing={false}
                    />
                </div>
            )}
        </LazyLoad>
    );
}
