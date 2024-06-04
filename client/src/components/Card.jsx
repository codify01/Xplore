import React from 'react'


const Card = ({image,title,description}) => {
  return (
    <>
        <div className='bg-neutral-800 text-neutral-400 p-5 rounded w-[210px]'>
            <img src={`${image}`} alt="thumbnail" className='rounded aspect-square' />
            <h1>{title}</h1>
            <p className='font-semibold capitalize text-wrap trans'>{description}</p>
        </div>
    </>
  )
}

export default Card