import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-10 py-10">
      <h2 className="text-3xl font-bold text-primary">Mobiele Apps</h2>

      <div className="flex flex-col gap-2 my-4">
        <h3 className="font-bold">Andriod Apps</h3>
        <ul className="ml-10 text-sm" style={{ listStyleType: "disc" }}>
          <li>
            Onze{" "}
            <Link
              className="text-green hover:underline"
              target="_blank"
              href="https://play.google.com/store/apps?hl=en&gl=US"
            >
              android applicatie
            </Link>{" "}
            staat in de Google Play Store.
          </li>
          <li>
            Klik{" "}
            <Link
              className="text-green hover:underline"
              target="_blank"
              href="https://play.google.com/store/apps?hl=en&gl=US"
            >
              hier
            </Link>{" "}
            óf zoek Carnaval Radio en download de app.{" "}
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-2 my-8">
        <h3 className="font-bold">Apple/IOS/iTunes app</h3>
        <ul className="ml-10 text-sm" style={{ listStyleType: "disc" }}>
          <li>
            Download de{" "}
            <Link
              className="text-green hover:underline"
              target="_blank"
              href="https://apps.apple.com/nl/app/tunein-nfl-radio-podcasts/id418987775"
            >
              Tunein
            </Link>{" "}
            app in de Itunes store.{" "}
            <Link
              className="text-green hover:underline"
              target="_blank"
              href="hhttps://apps.apple.com/nl/app/tunein-nfl-radio-podcasts/id418987775"
            >
              Klik hier
            </Link>{" "}
          </li>
          <li>Zoek naar "Carnaval-Radio"</li>
          <li>Maak de radio favoriet door te klikken op het hartje</li>
        </ul>
      </div>
      <p className="mt-8 mb-2 text-sm">
        Zo kan je overal luisteren naar Carnaval-Radio!
      </p>
      <p className="text-sm">Veel luisterplezeer!</p>
    </div>
  );
};

export default page;
