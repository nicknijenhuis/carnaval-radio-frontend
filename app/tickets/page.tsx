"use client";
import React, { useEffect } from "react";
import { MdCreditCard } from "react-icons/md";
import { Indie } from "../fonts/font";
import Link from "next/link";

const page = () => {

  useEffect(() => {
    const iframe: any = document.querySelector("#child-iframe");

    const messageListener = (e: any) => {
      // message that was passed from iframe page
      const message = e.data;

      if (iframe === null) return;

      iframe.style.height = message.height + 'px';
      iframe.style.width = message.width + 'px';
    };

    window.addEventListener('message', messageListener, false);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('message', messageListener);
    };
  }, []);

  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
      <div className="p-3 sm:p-8 md:p-8 lg:p-8 xl:p-8 rounded-3xl bg-white max-w-3xl">
        <h2
          className={`flex items-center gap-2 text-3xl text-primary mb-5 font-bold ${Indie.className}`}
        >
          {<MdCreditCard />} <span>Tickets</span>
        </h2>
        <p>Klaar voor het feest? Carnaval Radio tickets zijn beschikbaar op zondag 12 november om 13:00 uur! Wachtrij opent om 12:49 uur. Let op: het heeft geen zin om eerder in de wachtrij te staan. Wees er op tijd bij.</p>

        <iframe id="child-iframe" src="https://www.ticketcrew.nl/tickets/carnaval-radio?embed=true" width="100%" frameBorder="0" scrolling="no" style={{ overflow: 'hidden' }} allowFullScreen={true}></iframe>

        <p className="my-2">
          Zie je hier geen tickets? Check de link: <Link
            className="text-blue-500 font-semibold underline"
            href="https://www.ticketcrew.nl/tickets/carnaval-radio"
            target="_blank"
          >ticketcrew.nl/tickets/carnaval-radio
          </Link>
        </p>
      </div>
    </div>
  );
};

export default page;
