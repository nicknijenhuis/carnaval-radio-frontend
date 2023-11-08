import SocialMediaFeed from "@/components/Socials/SocialFeed";

export async function generateMetadata() {
  return {
    title: `Social Feed | Carnaval Radio | 24/7 Vasteloavend Muzieek`,
  };
}

const SocialPage = () => {
  const facebookPageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
  const facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const instagramId = process.env.NEXT_PUBLIC_INSTAGRAM_ID;

  return (
    <div>
      <SocialMediaFeed
        facebookPageId={facebookPageId}
        facebookAccessToken={facebookAccessToken}
        instagramAccessToken={instagramAccessToken}
        instagramId={instagramId}
      />
    </div>
  );
};

export default SocialPage;
