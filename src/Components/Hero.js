import React from 'react'
import image from '../Assets/spiderman.jpg'

export default function Hero() {
  return (
    <>
<div class="grid grid-cols-2 gap-4">
    <div>
        <img class="w-200" src={image} alt="" />
    </div>
    <div>
        <h1 className="text-white">Spiderman</h1>
    </div>
</div>

    </>
  )
}
