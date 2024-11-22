/* eslint-disable no-unused-vars */
import React from 'react'

function Card() {
  return (
    <div className='bg-orange-200 flex flex-col flex-wrap justify-center items-center rounded-md w-32' >
      <div className="  bg-orange-100 overflow-hidden rounded-md">
        <img className="h-32 w-32 object-cover " src="https://nekos.best/api/v2/neko" alt="Placeholder" />
      </div>
      <div className="p-2 ">
        <h2 className=" font-semibold">Karan Kumar</h2>
        <p className='text-xs text-wrap w-full text-red-900 leading-none'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe?</p>
      </div>
      
        <button className= "bg-orange-600 hover:bg-blue-700 text-white font-bold py-1 px-2 text-xs  my-2 mx-auto rounded">Button</button>
      
    </div>
  )
}

export default Card