import Hero from "@/components/Hero/Hero";
import Sponsors from "@/components/Sponsors/Sponsors";
import PostCard from "@/components/Post/PostCard";
import SocialMediaFeed from "@/components/Socials/SocialFeed";
import Section from "@/components/Section";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { fetchPosts } from "@/GlobalState/ApiCalls/fetchPosts";

export async function generateMetadata() {
  return {
    title: `Carnaval Radio | 24/7 Vasteloavend Muzieek`,
  };
}

const page = async () => {
  const facebookPageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
  const facebookAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
  const instagramAccessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const instagramId = process.env.NEXT_PUBLIC_INSTAGRAM_ID;

  const posts = await fetchPosts();
 
  return (
    <section className="flex-grow">
      <Hero />
      <Sponsors />
      {posts && <PostCard posts={posts} />}
      {facebookPageId && (
        <Section
          title="Facebook"
          iconElement={<FaFacebook className="h-8 w-8 text-primary" />}
        >
          <SocialMediaFeed
            facebookPageId={facebookPageId}
            facebookAccessToken={facebookAccessToken}
            maxPosts={3}
          />
          <div className="flex items-center justify-center pt-8">
            <Link
              href="social/facebook"
              className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold"
            >
              Meer van facebook
            </Link>
          </div>
        </Section>
      )}
      {instagramId && (
        <Section
          title="Instagram"
          iconElement={<FaInstagram className="h-8 w-8 text-secondary" />}
        >
          <SocialMediaFeed
            instagramId={instagramId}
            instagramAccessToken={instagramAccessToken}
            maxPosts={3}
          />
          <div className="flex items-center justify-center pt-8">
            <Link
              href="social/instagram"
              className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold"
            >
              Meer van instagram
            </Link>
          </div>
        </Section>
      )}
    </section>
  );
};

export default page;
