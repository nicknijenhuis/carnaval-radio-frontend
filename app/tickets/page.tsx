"use client";
import React from "react";
import { MdCreditCard } from "react-icons/md";
import { Indie } from "../fonts/font";

const page = () => {
  const iframeHtml = `
  <div className="raw-html-embed">
  <div
    id="shop-frame"
    className="max-w-[600px] my-0 mx-auto"
    data-url="https://shop.eventix.io/1b1b8dc1-710e-4824-81bf-621949e15148"
  >
    &nbsp;
  </div>
  <script
    type="text/javascript"
    src="https://shop.eventix.io/build/integrate.js"
  ></script>
  <p>
    <a
      href="https://shop.eventix.io/1b1b8dc1-710e-4824-81bf-621949e15148/tickets"
      target="_blank"
    >
      Klik hier om de ticketshop in een nieuw tabblad te openen.
    </a>
  </p>
</div>`;
  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
      <div className="p-3 sm:p-8 md:p-8 lg:p-8 xl:p-8 rounded-3xl bg-white max-w-3xl">
        <h2
          className={`flex items-center gap-2 text-3xl text-primary mb-5 font-bold ${Indie.className}`}
        >
          {<MdCreditCard />} <span>Tickets</span>
        </h2>
        <iframe
          src="https://shop.eventix.io/1b1b8dc1-710e-4824-81bf-621949e15148/tickets"
          className="h-[600px] sm:h-[500px] md:h-[500px] lg:h-[500px] xl:h-[500px] w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
