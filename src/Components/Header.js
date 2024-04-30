import React, { useState } from 'react'
import { BiMoviePlay } from "react-icons/bi";
import Button from './Button';

export default function Header() {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"SERVICE",link:"/"},
        {name:"ABOUT",link:"/"},
        {name:"LIVE TV",link:"/"},
    ];
    let[open,setOpen]=useState(false);
  return (
    <>
    <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:flex items-center justify-between bg-white py-4 md:px:10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="text 3xl text-red-600 mr-1 pt-2">
                <BiMoviePlay/>
            </span>
            Movies
            </div>
            <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
            <ul className="md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transitio-all duration-500 ease-in">{
                Links.map((Link)=>(
                    <li key={Link.name} className="md:ml-8 text-xl md:my-0 my-7">
                        <a href={Link.link} className="text-gray-800 hover:text-gray-400 duration-500">{Link.name}</a>
                    </li>
                ))
            }
            <Button>
                Get Started
            </Button>
            <Button>
                Get Started
            </Button>
            </ul>
        </div>
    </div>
    </>
)
}
