import React from 'react'
import Image from 'next/image'
import Button from './Button';
import { BiArrowToRight } from 'react-icons/bi';

export interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
   images?: string[] | undefined;
}
interface CardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
  images?: string[] | undefined;
  onClick?: (property: Property) => void;
}
const Card: React.FC<CardProps> = ({ title, description, image, location, price, onClick, images }) => {
  return (
    <div className="card bg-base-100 glassmorphism shadow-xl hover:transform hover:scale-105">
      <figure className='p-3 rounded-xl'> <Image src={image} width={100} height={50} alt='featured-1' className='rounded-xl w-full max-h-60' unoptimized /></figure>
      <div className="card-body text-base text-slate-100">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <Button
            bgColor="white"
            color="black"
            text="View"
            borderRadius="10px"
            icon={<BiArrowToRight color='black' size={"lg"}/>}
            onClick={() => onClick({ id: 1, title, description, image, location, price, images })}
            size='text-lg'
            width='25%'
            bgHoverColor='bg-gray-100'
            />
          <span>
            <div className="badge badge-outline">Ksh {price}</div>
            <div className="badge badge-outline">{location}</div>
          </span>
        </div>
        <div className="divider"></div>
      </div>
    </div>
  )
}

export default Card