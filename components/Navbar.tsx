import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo-2.png";

const Navbar = () => {
  return (
    <nav className="hidden md:flex items-center justify-between px-32 py-1 bg-[#FFFFD0] text-black">
      {/* Site logo */}
      <Link href="/">
        <Image src={logo} width={120} height={120} alt="Logo" />
      </Link>
      {/* Navlinks */}
      <div>
        <ul className="flex space-x-10 text-lg font-semibold">
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link href="/listen">Listen</Link>
          </li>
          <li>
            <Link href="/news">News</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
