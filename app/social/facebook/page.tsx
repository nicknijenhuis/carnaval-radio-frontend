import { Indie } from "@/app/fonts/font";
import SocialMediaFeed from "@/components/Socials/SocialFeed";
import { FaFacebook } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: `Facebook Feed | 24/7 Vasteloavend Muzieek`,
  };
}

const FacebookOnlyPage = () => {
  const facebookPageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
  const facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 mb-4">
        <FaFacebook className="text-2xl text-secondary" />
        <h2 className={`text-center text-2xl font-semibold ${Indie.className}`}>
          Facebook posts
        </h2>
      </div>
      <SocialMediaFeed
        facebookPageId={facebookPageId}
        facebookAccessToken={facebookAccessToken}
      />
    </div>
  );
};

export default FacebookOnlyPage;
