"use client";
import { useParams } from "next/navigation";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_POST } from "@/GlobalState/ApiCalls/graphql/article_queries";
import { singlePost } from "@/types/articleTypes";
import Image from "next/image";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { HiMail } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import ReactMarkdown from "react-markdown";

const page = async ({ params }: { params: { slug?: string } }) => {
  const { data } = await client.query({
    query: GET_SINGLE_POST,
    variables: { slugUrl: params.slug },
  });

  let post = data.articles.data[0].attributes;

  const formatDate = (inputDate: any) => {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getUTCFullYear();

    const formattedDate = `${day} ${month}, ${year}`;

    return <span className="text-sm">{formattedDate}</span>;
  };

  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
      {post && (
        <div className="flex flex-col gap-4 max-w-3xl p-4 rounded-3xl bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-primary">
              {post.Title}
            </h2>
            {formatDate(post.publishedAt)}
          </div>
          <ReactMarkdown>{post.Content}</ReactMarkdown>
          <Image
            src={post.CoverImage.data.attributes.url}
            className="h-48 sm:h-64 md:h-96 lg:h-96 xl:h-96 w-full rounded-lg"
            width={1000}
            height={1000}
            alt={post.Title}
          />
          <div className="flex items-center gap-4">
            <h3 className="text-lg font-semibold">Share:</h3>
            <div className="flex space-x-4 items-center">
              {/* facebook site */}
              <FacebookShareButton
                url={`https://carnavalsradio.nl/articles/${params.slug}`}
              >
                <FaFacebook className="text-3xl text-blue-500" />
              </FacebookShareButton>

              {/* whatsapp */}
              <WhatsappShareButton
                url={`https://carnavalsradio.nl/articles/${params.slug}`}
              >
                <FaWhatsapp className="text-3xl text-green" />
              </WhatsappShareButton>
              {/* Twitter */}
              <TwitterShareButton
                url={`https://carnavalsradio.nl/articles/${params.slug}`}
                title={"WSSCs"}
              >
                <FaTwitter className="text-3xl text-blue-400" />
              </TwitterShareButton>
              {/* email */}
              <EmailShareButton
                url={`https://carnavalsradio.nl/articles/${params.slug}`}
                subject={`Carnaval Radio Post ${params.slug}`}
                body={
                  "Hey there I am sharing a Carnaval Radio Post with you, have a look at it."
                }
              >
                <HiMail className="text-4xl text-red-500" />
              </EmailShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
