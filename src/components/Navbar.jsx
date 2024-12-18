import { useState, useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [bgColor, setBgColor] = useState('')

    //set nav to false (close and show)
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setBgColor('bg-rose-700'); // Change to rose color on scroll
          } else {
            setBgColor(''); // Change back to default color
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
            <div className={`fixed ${bgColor} top-0 w-full z-50`}>
                <div className=" max-w-[1280px] mx-auto flex justify-between items-center">
                    <h1 className="text-white font-bold text-3xl px-4 py-6">REDAN.</h1>
                    <div className="hidden md:flex">
                        <ul className="flex gap-8 text-white font-medium">
                            <li className='hover:text-yellow-200'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='hover:text-yellow-200'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='hover:text-yellow-200'>
                                <Link to="/company">Company</Link>
                            </li>
                            <li className='hover:text-yellow-200'>Service</li>
                        </ul>
                        <input className="px-3 py-1 rounded-lg text-right ml-2" type="text" placeholder="search" />
                    </div>
                    <div onClick={handleNav} className='text-white block md:hidden mr-2'>
                        {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
                    </div>
                    <div className={nav ? 'fixed md:hidden top-[10%] left-[60%] h-[50%] w-[60%] bg-rose-700  text-white font-medium mr-3' : 'hidden'}>
                        <ul className="uppercase">
                            <li className='p-4 border-b'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='p-4 border-b'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='p-4 border-b'>
                                <Link to="/company">Company</Link>
                            </li>
                            <li className='p-4 border-b'>Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gradient-to-r from-red-600 to-red-300 h-40"></div>

        </>
    );
};
export default Navbar;