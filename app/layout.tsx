import "./globals.css";
import { Providers } from "@/GlobalState/Providers";
import type { Metadata } from "next";
import SideBar from "@/components/Sidebar/SideBar";
import MobileHeader from "@/components/MobileHeader";
import Player from "@/components/Player/Player";
import Footer from "@/components/Footer";
import { dosis } from "./fonts/font";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_UI_NAVIGATION } from "@/GlobalState/ApiCalls/graphql/navigation_queries";
import { fetchThemeData } from "@/GlobalState/ApiCalls/fetchTheme";
import FeedbackForm from "./FeedbackForm";
import GoogleAnalytics from "@/components/Analytics/GoogleAnalytics";
import CookieBanner from "@/components/cookieBanner";
import GoogleAnalyticsPageView from "@/components/Analytics/GoogleAnalyticsPageView";
import { Suspense } from "react";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Carnaval Radio | 24/7 Vasteloavend Muzieek",
  description: "De vastelaoves Radio | 24/7 Vastelaovend Muzieek",
  robots: process.env.NEXT_PUBLIC_INDEX_IN_SEARCH_ENGINES
    ? "index, follow"
    : "noindex, nofollow",
};

const GoogleAnalyticsFallback = () => null;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: footer } = await client.query({
    query: GET_UI_NAVIGATION,
    variables: { menuName: "footer" },
  });

  const { data: menu } = await client.query({
    query: GET_UI_NAVIGATION,
    variables: { menuName: "main" },
    context: {
      fetchOptions: {
        next: { revalidate: 60 },
      },
    },
  });

  const themeData = await fetchThemeData();
  const GA_MEASUREMENT_ID = process.env.GOOGLE_ANALYTICS_ID;
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Suspense fallback={<GoogleAnalyticsFallback />}>
          {GA_MEASUREMENT_ID && (
          <>
            <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
            <GoogleAnalyticsPageView GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
          </>
          )
        }
          <CookieBanner />
        </Suspense>
        <Providers>
          <MobileHeader themeData={themeData} menu={menu.renderNavigation} />
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0">
            <div className="col-span-1">
              <SideBar menu={menu.renderNavigation} themeData={themeData} />
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-4 xl:col-span-5 pb-20">
              {children}
              <Footer data={footer.renderNavigation} themeData={themeData} />
              <Player />
            </div>
          </div>
        </Providers>
        <FeedbackForm />
        <Analytics />
      </body>
    </html>
  );
}
