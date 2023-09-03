import { useState } from "react"

const NavModal = ({hidden , HiddenFun}) => {
    return (
        <div className={`fixed right-0 top-14  bg-white w-full h-screen ease-in-out duration-300 md:hidden max-md:flex ${hidden ? 'mr-[-800px]' : 'mr-[0px]'}`}>
            <div className="absolute top-8 w-full h-screen">
                <nav className='flex items-center  gap-[60px] flex-col'>
                    <ul className='flex items-center gap-[60px]'>
                        <li>
                            <a href="#" onClick={() => HiddenFun()} className='font-extrabold'>DISCOVER</a>
                        </li>
                        <li>
                            <a href="#" onClick={() => HiddenFun()} className='font-extrabold'>FEED</a>
                        </li>
                    </ul>
                    <button onClick={() => HiddenFun()} type='button' className='border-black border-[1px] w-[205px] h-[48px] rounded-[4px]'>connect wallet</button>
                </nav>
            </div>
        </div>
    )
}

export default NavModal