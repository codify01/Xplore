import React from 'react'


const Card = ({image,title}) => {
  return (
    <div>
        <div className='bg-neutral-700 p-3 rounded w-[210px]'>
            <img src={`${image}`} alt="thumbnail" />
            <p>{title}</p>
            <p>Lorem ipsum dolor sit amet consectetur</p>
        </div>
    </div>
  )
}

export default Card