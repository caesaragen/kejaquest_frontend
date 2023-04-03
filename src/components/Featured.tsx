import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

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
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Property } from "./Card";

const Featured: React.FC = () => {
    const router = useRouter()
    const [properties, setProperties] = useState<any>([])

    const getProperties = async () => {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setProperties(data.products)
    }
    useEffect(() => {
        getProperties()
    }, [])


    const handleClick = (property: Property) => {
        console.log(property)
        router.push({
            pathname: '/singleProperty',
            query: { ...property}
        })
    }

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

                {properties.map((property: any) => (
                    <SwiperSlide key={property.id}>
                        <Card
                            title={property.title}
                            price={property.price}
                            location={property.brand}
                            image={property.thumbnail}
                            description={property.description}
                            images={property.images}
                            onClick={(property: Property) => handleClick(property)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Featured;
