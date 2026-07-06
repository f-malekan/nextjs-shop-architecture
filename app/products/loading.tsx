import React from 'react'

const loading = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 mt-3 container mx-auto'>
         {Array.from({ length: 12 }).map((_, index) => (
        <div 
          key={index} 
          className="bg-gray-4 rounded w-full aspect-5/7"
        >
         
        </div>
      ))}
    </div>
  )
}

export default loading