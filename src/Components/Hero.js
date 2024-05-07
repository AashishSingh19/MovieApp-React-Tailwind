import React from 'react'
import image from '../Assets/spiderman.jpg'

export default function Hero() {
  return (
    <>
    <div className="mt-20">
        <img 
        className="w-200"
        src={image} 
        alt="" />
    </div>
    </>
  )
}
