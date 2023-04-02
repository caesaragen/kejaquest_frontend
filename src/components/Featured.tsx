import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectCoverflow,
    Autoplay,
    EffectCards,
    EffectCube,
    EffectFlip,
    EffectFade,
    EffectCreative
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import AliceCarousel from "react-alice-carousel";
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
        <div className="flex flex-col items-center gap-5 justify-center w-2/3 mb-5">
            <h2 className="text-3xl font-black text-slate-100">Featured Properties</h2>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                spaceBetween={30}
                modules={[
                    EffectCoverflow,
                    Pagination,
                    Navigation,
                    Scrollbar,
                    A11y,
                    Autoplay,
                    EffectCards,
                    EffectCube,
                    EffectFlip,
                    EffectFade,
                    EffectCreative
                ]}
                className="mySwiper items-center justify-center"
            >
                <SwiperSlide>
                    <Card
                        title="One Bedroom Apartment"
                        price={18000}
                        location="Roysambu"
                        image="https://cdn.pixabay.com/photo/2019/04/23/09/03/indoor-4148889_960_720.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        title="Bedsitter"
                        price={10000}
                        location="Rongai"
                        image="https://cdn.pixabay.com/photo/2016/04/15/11/46/bedroom-1330846_960_720.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        title="Two Bedroom Apartment"
                        price={25000}
                        location="Embakasi"
                        image="https://cdn.pixabay.com/photo/2018/04/10/06/29/apartment-3306501_960_720.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        title="Massionette"
                        price={40000}
                        location="Nyayo Estate"
                        image="https://cdn.pixabay.com/photo/2015/11/06/11/40/multi-family-home-1026386_960_720.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                        title="Hostel"
                        price={15000}
                        location="Madaraka"
                        image="https://cdn.pixabay.com/photo/2020/08/20/09/15/living-room-5502968_960_720.jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                    />
                </SwiperSlide>
            </Swiper>
            {/* <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            /> */}
        </div>
    );
};

export default Featured;
