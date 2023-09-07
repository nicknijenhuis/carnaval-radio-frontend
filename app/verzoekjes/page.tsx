import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-primary">Verzoekjes</h2>
      <p className="text-sm mt-4">
        Verzoekjes kunnen via de shoutbox worden aangevraagd op de volgende
        manier:
      </p>
      <ul className="ml-10 text-sm my-4" style={{ listStyleType: "decimel" }}>
        <li>
          <Link className="text-green hover:underline" target="_blank" href="/">
            Klik hier
          </Link>{" "}
          voor de shoutbox
        </li>
        <li>Typ hierin uw verzoekje</li>
      </ul>
      <p className="text-sm">
        Let wel op! U dient een Facebook account te hebben om verzoekjes te
        kunnen doen. Verzoekjes worden alleen gedraaid tijdens de
        Live-uitzendingen. Klik{" "}
        <Link
          className="text-secondary font-bold hover:underline"
          href="/liveUitzendingen"
        >
          hier
        </Link>{" "}
        om te zien wanneer de Live-uitzendingen zijn.
      </p>
    </div>
  );
};

export default page;
