"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "@/helpers/storageHelper";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue,
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);
  return (
    <div
      className={` ${
        cookieConsent != null ? "hidden" : "flex"
      } my-10 mx-auto max-w-max md:max-w-screen-sm fixed bottom-12 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-white rounded-lg shadow`}
    >
      <div className="text-center">
        <p>
          Wij gebruiken{" "}
          <Link href="/privacy-beleid" className="font-bold text-sky-400">
            cookies
          </Link>{" "}
          on op onze site
        </p>
      </div>

      <div className="flex gap-2">
        <button
          className="px-5 py-2 text-gray-500 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Weigeren
        </button>
        <button
          className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold"
          onClick={() => setCookieConsent(true)}
        >
          Accepteren
        </button>
      </div>
    </div>
  );
}
