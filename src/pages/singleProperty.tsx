import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";
import { Navbar } from "@/components";

const SingleProperty: React.FC = () => {
    const [images, setImages] = useState<any>([]);
    const router = useRouter();
    const { ...property } = router.query;
    // setImages(property.images);
    let items = [];
    if (Array.isArray(property.images)) {
        items = property.images.map((image: any, index: any) => (
            <Image
                key={index}
                src={image}
                width={200}
                height={100}
                alt="featured-1"
                className="rounded-xl w-full max-h-96 object-contain"
            />
        ));
    }

    // console.log(property)
    return (
        <>
            <div className="min-h-screen bg-gray-100 xl:py-32">
                
                <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 card">
                    <div className="max-w-3xl mx-auto">
                        {Array.isArray(property.images) ? (
                            <AliceCarousel
                                autoWidth
                                infinite
                                mouseTracking
                                items={items || []}
                            />
                        ) : (
                            <Image
                                src={property.image}
                                width={100}
                                height={50}
                                alt="featured-1"
                                className="rounded-xl w-full max-h-96 object-contain"
                                unoptimized
                            />
                        )}
                        <div className="mt-8 flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {property.title}
                                </h1>
                                <p className="text-gray-700">{property.brand}</p>
                            </div>
                            <div className="text-xl font-medium text-gray-900">
                                ${property.price}
                            </div>
                        </div>
                        <div className="mt-8 prose prose-lg text-gray-700">
                            {property.description}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleProperty;
