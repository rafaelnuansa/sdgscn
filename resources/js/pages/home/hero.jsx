import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IconArrowLeft, IconArrowRight } from '@irsyadadl/paranoid';
import { Link } from '@inertiajs/react';
import { buttonVariants } from '@/components/ui/button';

export default function Hero({ slides }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="absolute right-0 z-10 p-3 cursor-pointer bg-white/40 rounded-full shadow-md text-gray-800"
                style={{ top: '50%', right: '2%', transform: 'translateY(-50%)' }}
                onClick={onClick}
            >
                <IconArrowRight size={24} />
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="absolute left-0 z-10 p-3 cursor-pointer bg-white/40 rounded-full shadow-md text-gray-800"
                style={{ top: '50%', left: '2%', transform: 'translateY(-50%)' }}
                onClick={onClick}
            >
                <IconArrowLeft size={24} />
            </div>
        );
    }

    if (slides.length === 1) {
        // Jika hanya ada 1 slide, tidak menggunakan slider
        const slide = slides[0];
        return (
            <div className="relative overflow-hidden h-[500px]">
                <img
                    src={`/storage/sliders/${slide.image}`}
                    alt={slide.title || "Slide"}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {(slide.title || slide.description || slide.url) && (
                    <div className="absolute bottom-4 left-4 text-white z-20 bg-black/50 p-4 rounded-lg max-w-md">
                        {slide.title && <h2 className="text-2xl font-bold">{slide.title}</h2>}
                        {slide.description && <p className="mt-2">{slide.description}</p>}
                        {slide.url && (
                            <Link href={slide.url} className={buttonVariants({ variant: 'primary', className: 'mt-4' })}>
                                Read More
                            </Link>
                        )}
                    </div>
                )}
            </div>
        );
    }

    // Jika lebih dari 1 slide, gunakan slider
    return (
        <div className="relative overflow-hidden">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden h-[500px]" // Set fixed height for consistency
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={`/storage/sliders/${slide.image}`}
                                alt={`Slide ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                        {(slide.title || slide.description || slide.url) && (
                            <div className="absolute bottom-4 left-4 text-white z-20 bg-black/50 p-4 rounded-lg max-w-md">
                                {slide.title && <h2 className="text-2xl font-bold">{slide.title}</h2>}
                                {slide.description && <p className="mt-2">{slide.description}</p>}
                                {slide.url && (
                                    <Link href={slide.url} className={buttonVariants({ variant: 'primary', className: 'mt-4' })}>
                                        Read More
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </Slider>
        </div>
    );
}
