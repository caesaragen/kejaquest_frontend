import React from 'react'
import Image from 'next/image'

const Card: React.FC = () => {
  return (
    <div className="card bg-base-100 glassmorphism shadow-xl hover:transform hover:scale-105">
    <figure> <Image src='/house.jpg' width={200} height={100} alt='featured-1' className='rounded w-full' /></figure>
    <div className="card-body text-base text-slate-100">
        <h2 className="card-title">
            One Bedroom Apartment
            <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>These are new vacant apartments in your area</p>
        <div className="card-actions justify-end">
            <div className="badge badge-outline">New</div>
            <div className="badge badge-outline">Imara Daima</div>
        </div>
    </div>
</div>
  )
}

export default Card