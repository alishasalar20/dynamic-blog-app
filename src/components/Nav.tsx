"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
    const [menuOpen,SetmenuOpen] = useState(false);

    const toggleMenu =() => {
        SetmenuOpen ((prev) => (!prev))
    };
  return (
    <nav className=' flex bg-purple-800 h-12 w-full justify-between'>
        <div>
<h1 className='items-center text-slate-300 shadow-blue-400 ml-8 py-4 font-semibold'><b>Journey To Success </b></h1>
        </div>
        <div >
            <ul className='hidden md:flex space-x-8 py-2 px-10'>
                <li><Link href={"/"} 
                 className='text-[20px] text-slate-300 hover:text-pink-400 transition duration-300'>Home</Link></li>
                <li><Link href={"/"} 
                className='text-[20px] text-slate-300 hover:text-pink-400 transition duration-300'>Blog</Link></li>
                <li><Link href={"/"} 
                 className='text-[20px] text-slate-300 hover:text-pink-400 transition duration-300'>Add Comment</Link></li>
                </ul>
        </div>
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle Menu">
            &#9776;
          </button>
        </div>
      {/* </div> */}

      {menuOpen && (
        <div className="md:hidden">
          <ul className="bg-[#044e83] text-white p-4 space-y-4">
            <li>
              <Link
                href="/"
                onClick={() => SetmenuOpen(false)}
                className="block text-white hover:text-teal-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => SetmenuOpen(false)}
                className="block text-white hover:text-teal-400 transition duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/comment"
                onClick={() => SetmenuOpen(false)}
                className="block text-white hover:text-teal-400 transition duration-300">
                Add Comment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
      
    
  )
}

export default Nav
