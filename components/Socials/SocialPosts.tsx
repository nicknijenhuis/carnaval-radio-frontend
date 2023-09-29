import { SocialPost } from "@/GlobalState/ApiCalls/fetchSocials";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialPosts = ({ posts }: { posts: SocialPost[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 2xl:gap-10 mt-auto pt-2 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-4 w-full">
      {posts.map((post, i) => (
        <div
          key={post.id}
          className={`${`bg-${
            i % 4 === 0
              ? "tertiaryShade_2"
              : i % 4 === 1
              ? "secondayShade_2"
              : i % 4 === 2
              ? "primaryShade_3"
              : "secondayShade_2"
          }`} rounded-xl p-5 cursor-pointer overflow-hidden space-y-5 w-full`}
        >
          <img
            className="h-60 w-[98%] object-cover rounded-xl"
            src={post.image}
            alt={post.text}
          />
          <div className="px-2 flex  items-center text-xs text-gray-500">
            {post.type === "Facebook" ? (
              <FaFacebook size={20} />
            ) : post.type === "Instagram" ? (
              <FaInstagram size={20} />
            ) : null}
            <div className="ml-2">{post.date.toLocaleDateString("nl-NL")}</div>
          </div>
          <p>{post.text}</p>
          <Link
            target="_blank"
            className={`flex items-center justify-center bg-white border-2 rounded-md p-2 ${
              i % 4 === 0
                ? "border-tertiary text-tertiary"
                : i % 4 === 1
                ? "border-secondary text-secondary"
                : i % 4 === 2
                ? "border-primary text-primary"
                : "border-secondary text-secondary"
            }`}
            href={post.link}
          >
            Verder lezen op {post.type}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialPosts;
