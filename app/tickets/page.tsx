import React from "react";
import { MdCreditCard } from "react-icons/md";
import { Indie } from "../fonts/font";
import Script from "next/script";
import Link from "next/link";

const page = () => {
  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
      <div className="p-3 sm:p-8 md:p-8 lg:p-8 xl:p-8 rounded-3xl bg-white max-w-3xl">
        <h2
          className={`flex items-center gap-2 text-3xl text-primary mb-5 font-bold ${Indie.className}`}
        >
          {<MdCreditCard />} <span>Tickets</span>
        </h2>
        <p>
          <Link
            className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold"
            href="https://shop.eventix.io/1b1b8dc1-710e-4824-81bf-621949e15148/tickets"
            target="_blank"
          >
            Klik hier om de ticketshop in een nieuw tabblad te openen.
          </Link>
        </p>
        <div
          id="shop-frame"
          className="max-w-[600px] my-0 mx-auto"
          data-url="https://shop.eventix.io/1b1b8dc1-710e-4824-81bf-621949e15148"
        >
          &nbsp;
        </div>
        <Script
          strategy="afterInteractive"
          src="https://shop.eventix.io/build/integrate.js"
        ></Script>
      </div>
    </div>
  );
};

export default page;
