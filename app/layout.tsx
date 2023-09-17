import { Providers } from "@/GlobalState/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import SideBar from "@/components/Sidebar/SideBar";
import MobileHeader from "@/components/MobileHeader";
import Player from "@/components/Player/Player";
import Footer from "@/components/Footer";
import { fetchThemeData } from "@/GlobalState/ApiCalls/fetchTheme";
import { dosis } from "./fonts/font";
import { fetchThemeColors } from "@/GlobalState/ApiCalls/fetchColors";

export const metadata: Metadata = {
  title: "Carnaval Radio | 24/7 Vasteloavend Muzieek",
  description: "De vastelaoves Radio | 24/7 Vastelaovend Muzieek",
  robots: process.env.NEXT_PUBLIC_INDEX_IN_SEARCH_ENGINES
    ? "index, follow"
    : "noindex, nofollow",
};

export const getRGBColor = (hex:any, type:any) => {
  let color = hex.replace(/#/g, "")
  // if shorthand notation is passed in
  if (color.length !== 6) {
    color = `${color}${color}`
  }
  // rgb values
  var r = parseInt(color.substr(0, 2), 16)
  var g = parseInt(color.substr(2, 2), 16)
  var b = parseInt(color.substr(4, 2), 16)

  return `--color-${type}: ${r}, ${g}, ${b};`
}



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeData = await fetchThemeData();
  console.log(themeData.attributes.BaseColor)
  const primaryColor = getRGBColor(themeData.attributes.BaseColor, "primary")

  return (
    <html lang="nl">
      <body className={dosis.className}>
              <style>:root {`{${primaryColor}}`}</style>

        <Providers>
          {themeData && (
            <>
              <MobileHeader themeData={themeData} />
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-0">
                <div className="col-span-1">
                  <SideBar />
                </div>

                <div className="col-span-1 sm:col-span-1 md:col-span-4 lg:col-span-4 xl:col-span-5 pb-20">
                  {children}
                  <Footer />
                  <Player themeData={themeData} />
                </div>
              </div>
            </>
          )}
        </Providers>
      </body>
    </html>
  );
}
