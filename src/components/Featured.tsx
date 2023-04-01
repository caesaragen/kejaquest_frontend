import React from 'react'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import "react-alice-carousel/lib/alice-carousel.css";

// const handleDragStart = (e: Event) => e.preventDefault();

// const responsive = {
//     0: {
//         items: 1
//     },
//     568: {
//         items: 2
//     },
//     1024: {
//         items: 3,
//         itemsFit: 'contain'
//     },
// };
// const items = [
//     <Card className="item" data-value="1" />,
//     <Card className="item" data-value="2" />,
//     <Card className="item" data-value="3" />,
// ];

const Featured: React.FC = () => {
    return (
        <div className='flex flex-col items-center gap-5 justify-center w-1/2'>
            <h2 className='text-3xl font-black text-slate-100'>Featured</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: true
                }}

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation, Scrollbar, A11y, Autoplay]}
                className="mySwiper items-center justify-center"
            >
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
                <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
            {/* <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            /> */}
        </div>
    )
}

export default Featured