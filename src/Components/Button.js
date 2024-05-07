import React from 'react'

export default function Button(props) {
  return (
    <button className="bg-red-600 text-white text-md font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-gray-100 hover:text-red-500 duration-500">
        {props.children}
    </button>
  )
}
