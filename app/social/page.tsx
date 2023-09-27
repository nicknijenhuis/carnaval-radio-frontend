import Link from "next/link";

const SocialPage = () => {
  const facebookPageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
  const facebookAccessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;
  const instagramAccessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN;

  return (
    <div>
      <SocialMediaFeed
        facebookPageId={facebookPageId}
        facebookAccessToken={facebookAccessToken}
        instagramAccessToken={instagramAccessToken}
      />
    </div>
  );
};

export default SocialPage;

interface Post {
  id: string;
  date: Date;
  text: string;
  image: string;
  link: string;
}

interface Props {
  facebookPageId?: string;
  facebookAccessToken?: string;
  instagramAccessToken?: string;
}

const SocialMediaFeed = async ({
  facebookPageId,
  facebookAccessToken,
  instagramAccessToken,
}: Props) => {

  const fetchPosts = async () => {
    let facebookPosts: Post[] = [];
    try {
      const facebookResponse = await fetch(
        `https://graph.facebook.com/v18.0/${facebookPageId}/posts?access_token=${facebookAccessToken}&fields=id,message,created_time,full_picture,permalink_url`
      );
      const facebookData = await facebookResponse.json();
      facebookPosts = facebookData.data.map((post: any) => ({
        id: post.id,
        date: new Date(post.created_time),
        text: post.message,
        image: post.full_picture,
        link: post.permalink_url,
      }));
    } catch (error) {}

    let instagramPosts: Post[] = [];
    try {
      const instagramResponse = await fetch(
        `https://graph.instagram.com/carnaval-radio/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${instagramAccessToken}`
      );
      const instagramData = await instagramResponse.json();
      instagramPosts = instagramData.data.map((post: any) => ({
        id: post.id,
        date: new Date(post.timestamp),
        text: post.caption,
        image: post.media_url,
        link: post.permalink,
      }));
    } catch (error) {}

    const allPosts = [...facebookPosts, ...instagramPosts];
    allPosts.sort((a, b) => b.date.getTime() - a.date.getTime());
    return allPosts;
  };

  const posts = await fetchPosts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 2xl:gap-10 mt-auto pt-2 sm:pt-2 md:pt-6 lg:pt-10 xl:pt-10 w-full">
      {posts.map((post, i) => (
        <div
          key={post.id}
          className={`${`bg-${
            i % 4 === 0
              ? "tertiaryShade_2"
              : i % 4 === 1
              ? "secondayShade_2"
              : i % 4 === 2 ? "primaryShade_3" : "secondayShade_2"
          }`} rounded-xl p-5 cursor-pointer overflow-hidden space-y-5 w-full`}
        >
          <img
            className="h-60 w-[98%] object-cover rounded-xl"
            src={post.image}
            alt={post.text}
          />
          <p>{post.text}</p>
          <Link
            target="_blank"
            className={`flex items-center justify-center bg-white border-2 rounded-md p-2 ${
              i % 4 === 0
                ? "border-tertiary text-tertiary"
                : i % 4 === 1
                ? "border-secondary text-secondary"
                : i % 4 === 2 ? "border-primary text-primary" : "border-secondary text-secondary"
            }`}
            href={post.link}
          >
            Verder lezen op Facebook
          </Link>
        </div>
      ))}
    </div>
  );
};
