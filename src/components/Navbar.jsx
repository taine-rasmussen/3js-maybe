

import { logo, menu, close } from "../assets";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  return (
    <div className={`${styles.paddinX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-1-7x1 mx-auto'>

      </div>

    </div>
  )
}

export default Navbar