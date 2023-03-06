

import { logo, menu, close } from "../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)



  return (
    <div className={`${styles.paddinX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-1-7x1 mx-auto p-2.5'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Taine Rasmussen<span className='sm:block hidden'>| Portfolio</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => { setActive(link.title) }}
              className={`${active === link.title
                ? 'text-white'
                : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => { setToggle(!toggle) }}
          />

        </div>
      </div>
    </div >
  )
}

export default Navbar