import React, { useEffect, useState } from 'react'
import images from '../images/images'
import NavModal from '../NavModal/NavModal'
import './nav.css'
const Nav = () => {
    const [hidden, sethidden] = useState(true)
    const HiddenFun = () => {
        sethidden(!hidden)
    }
    return (
        <div className={`flex  bg-white w-full justify-between md:h-[96px] max-md:h-[76px] border-b-[#dbdbdb] border-b-[2px] z-50 max-md:fixed max-md:top-0 max-md:right-0 max-md:px-4`}>
            <NavModal hidden={hidden} HiddenFun={HiddenFun} />
            <div className="flex items-center ">
                <a href="#" className='hover:opacity-70'>
                    <img src={images[0]} alt="Web logo" className='flex max-w-[168px]' />
                </a>
            </div>
            <div className='flex gap-4'>
                <nav className='flex items-center  gap-[60px] md:flex max-md:hidden'>
                    <ul className='flex items-center gap-[60px]'>
                        <li>
                            <a href="#" className='font-extrabold'>DISCOVER</a>
                        </li>
                        <li>
                            <a href="#" className='font-extrabold'>FEED</a>
                        </li>
                    </ul>
                    <button type='button' className='border-black border-[1px] w-[205px] h-[48px] rounded-[4px]'>connect wallet</button>
                </nav>
                <button onClick={() => HiddenFun()} className='flex items-center px-2'><img src={images[2]} alt="menu button" className='md:hidden' /></button>
            </div>
        </div>
    )
}

export default Nav