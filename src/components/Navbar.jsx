

import { logo, menu, close } from "../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {

  const [active, setActive] = useState('')


  return (
    <div className={`${styles.paddinX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-1-7x1 mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt='logo' className='w-9' />
        </Link>
      </div>

    </div >
  )
}

export default Navbar