import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo-2.png";

const Footer = () => {
  return (
    <footer className="py-10 px-10 md:px-32 text-white bg-black 2xl:px-44">
      <div className="max-w-[30vw] md:max-w-[15vw]">
      <Link href="/">
         <Image src={logo} width={140} height={140} alt="Logo" />
       </Link>
      </div>
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-start justify-between pt-10">
        <div className="flex flex-col space-y-5">
          <div className="flex flex-row border border-white rounded-full">
            <input
              className="bg-transparent rounded-full outline-none pl-2"
              placeholder="Subscribe for updates"
              type="text"
            />
            <button className="border border-white bg-white text-black px-5 py-2 rounded-full">
              <h1 className="text-lg">Subscribe</h1>
            </button>
          </div>
        </div>
        <ul>
          <li>About Us</li>
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
        <div>
          <p className="max-w-[13rem]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row space-y-10 md:space-y-0 md:items-center justify-between pt-10">
        <h2 className="text-center mt-10 md:mt-0">Copyright @ Carnaval Radio</h2>
        <ul className="flex flex-col md:flex-row md:space-y-0 md:space-x-4 pr-12">
          <li>Instagram</li>
          <li>Tiktok</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;