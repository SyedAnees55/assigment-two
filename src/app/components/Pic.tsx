import React from 'react'

const Pic = () => {
  return (
    <div className='w-screen bg-black mt-5 h-screen'>
      <div className='flex p-10 gap-5'>
        <div className='w-6/12 bg-blue-300 h-44'></div>
        <div className='w-6/12 bg-blue-300 h-44'></div>
      </div>
      <div className='flex p-10 gap-5  '>
        <div className='w-6/12 bg-red-100 h-44'></div>
        <div className='w-6/12 bg-red-100 h-44'></div>
        <div className='w-6/12 bg-red-100 h-44'></div>
      </div>
    </div>
  )
}

export default Pic
