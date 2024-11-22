import React from 'react'

function Navbar({data}) {
  return (
    <div className='flex justify-between px-20 m-6'>
        <h2 className='font-bold text-xl'>Orange</h2>
        <h3 className='text-sm bg-orange-400 px-5 py-2 rounded-md text-white'>favourites {data.filter((item)=>item.added).length}</h3>
    </div>
  )
}

export default Navbar