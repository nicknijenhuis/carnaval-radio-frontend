import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-green-500">
      {/* Site logo */}
      <Link href="/">
        <Image src={logo} width={200} height={200} alt="Logo" />
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
