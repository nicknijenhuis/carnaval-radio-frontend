import { Indie } from "@/app/fonts/font";
import SocialMediaFeed from "@/components/Socials/SocialFeed";
import { FaInstagram } from "react-icons/fa";

export async function generateMetadata() {
  return {
    title: `Instagram Feed | 24/7 Vasteloavend Muzieek`,
  };
}

const InstagramOnlyPage = () => {
  const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const instagramId = process.env.NEXT_PUBLIC_INSTAGRAM_ID;

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 mb-4">
        <FaInstagram className="text-2xl text-secondary" />
        <h2 className={`text-center text-2xl font-semibold ${Indie.className}`}>
          Instagram feed
        </h2>
      </div>
      <SocialMediaFeed
        instagramAccessToken={instagramAccessToken}
        instagramId={instagramId}
      />
    </div>
  );
};

export default InstagramOnlyPage;
