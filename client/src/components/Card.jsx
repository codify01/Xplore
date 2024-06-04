import React from 'react'


const Card = ({image,title,description}) => {
  return (
    <>
        <div className='bg-neutral-800 text-neutral-400 p-3 rounded w-[210px] mb-3'>
            <img src={`${image}`} alt="thumbnail" className='rounded-lg aspect-square' />
            <h1>{title}</h1>
            <p className='font-semibold capitalize text-wrap trans'>{description}</p>
        </div>
    </>
  )
}

export default Card