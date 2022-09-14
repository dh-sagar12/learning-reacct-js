import logo from  '../logo.svg';
import React from 'react';


const Navbar = (props) => {
    const {counter} = props

    return (
        <>
            <div className='flex justify-between bg-pink-500 text-black p-5'>
                <div className='w-6 cursor-pointer'>
                   <img src='https://picsum.photos/200/300' className="w-16 rounded-full"  />
                </div>
                <div>
                    <ul className='flex space-x-5 font-bold cursor-pointer'>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Services
                        </li>
                        <li>
                            Contact us
                        </li>
                    </ul>
                </div>
                <div className=' space-x-2'>
                    <button className='bg-blue-500 p-[6px] outline-none rounded-sm hover:bg-red-600 hover:text-white'>{counter}</button>

                </div>
            </div>
        </>
    )
}

export default Navbar