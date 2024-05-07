import React from 'react'

export default function Button(props) {
  return (
    <button className="bg-red-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-gray-400 duration-500">
        {props.children}
    </button>
  )
}
