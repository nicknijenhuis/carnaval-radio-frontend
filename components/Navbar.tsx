import Image from "next/image";
import Link from "next/link";
import React, { useState} from "react";
import logo from "../public/assets/logo-2.png";
import { HiOutlineMenuAlt2} from "react-icons/hi"
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    let navLinks =[
      {name:"Sponsors",link:"/sponsors"},
      {name:"Listen",link:"/listen"},
      {name:"News",link:"/news"},
      {name:"Contact",link:"/contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='w-full fixed top-0 left-0 bg-[#E63A3A] z-10'>
      <div className='md:flex items-center justify-between text-white py-4 md:px-20 px-7 max-w-[1280px] m-auto'>
      <Link href="/">
         <Image src={logo} width={150} height={150} alt="Logo" />
       </Link>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        {
          open? <GrClose /> : <HiOutlineMenuAlt2 />
        }
      </div>

      <ul className={`flex flex-col md:flex-row md:items-center md:pb-0 pb-12 absolute bg-[#E63A3A] md:bg-transparent md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          navLinks.map((link)=>(
            <Link href={link.link} key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              {link.name}
            </Link>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Navbar

