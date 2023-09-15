import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/assets/logo-3.png";
import Socials from "./Socials";

import { TbMinusVertical } from "react-icons/tb";
import { GET_UI_NAVIGATION } from "@/GlobalState/ApiCalls/graphql/navigation_queries";
import { client } from "@/GlobalState/ApiCalls/api.config";

const Footer = async () => {
  const { data: footerData } = await client.query({
    query: GET_UI_NAVIGATION,
    variables: { menuName: "footer" },
  });

  // console.log("footer:");
  // console.log(footerData);

  return (
    <footer className="pt-10 text-black">
      <div className="flex flex-col items-center space-y-10 md:space-y-0 md:flex-row md:space-x-20 py-10 md:px-10">
        <div className="max-w-[30vw] md:max-w-[15vw]">
          <Link href="/">
            <Image src={logo} width={200} height={200} alt="Logo" />
          </Link>
          <Socials options="footer" />
        </div>
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-wrap items-start gap-4 sm:gap-16 md:gap-24 lg:gap-32 xl:gap-44 flex-grow">
          <div>
            <h2 className="font-bold">Quick Links</h2>
            <ul className="text-sm space-y-4">
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Attractions</Link>
              </li>
              <li>
                <Link href="/">Ticket Packages</Link>
              </li>
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Home</h2>
            <ul className="text-sm space-y-4">
              <li>
                <Link href="/">Over ons</Link>
              </li>
              <li>
                <Link href="/">Luisteren</Link>
              </li>
              <li>
                <Link href="/">Gastenboek</Link>
              </li>
              <li>
                <Link href="/">Overig</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Resources</h2>
            <ul className="text-sm space-y-4">
              <li>
                <Link href="/">Webinars</Link>
              </li>
              <li>
                <Link href="/">Podcasts</Link>
              </li>
              <li>
                <Link href="/">Newsletters</Link>
              </li>
              <li>
                <Link href="/">Upcoming</Link>
              </li>
              <li>
                <Link href="/">Partner Benchmarks</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row py-4 items-center justify-between px-10">
        <p>2023 Copyright Carnaval-Radio. All rights Reserved.</p>
        <ul className="flex space-x-5">
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center">
              <TbMinusVertical /> <p> Terms & Condition</p>
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center justify-center">
              <TbMinusVertical /> <p> Cookies Policy</p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
