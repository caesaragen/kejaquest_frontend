import React from 'react'
import Image from 'next/image'


interface CardProps {
  title: string;
  description: string;
  image: string;
  location: string;
  price: number;
}
const Card: React.FC<CardProps> = ({ title, description, image, location, price }) => {
  return (
    <div className="card bg-base-100 glassmorphism shadow-xl hover:transform hover:scale-105">
      <figure className='p-3 rounded-xl'> <Image src={image} width={100} height={50} alt='featured-1' className='rounded-xl w-full max-h-60' unoptimized/></figure>
      <div className="card-body text-base text-slate-100">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Ksh {price}</div>
          <div className="badge badge-outline">{location}</div>
        </div>
        <div className="divider"></div> 
      </div>
    </div>
  )
}

export default Card