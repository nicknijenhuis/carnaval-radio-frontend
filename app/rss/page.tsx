import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import { Post } from "@/types/articleTypes";
import { Feed } from "feed";
import fs from 'fs';

const page = async () => {
  const { data } = await client.query({
    query: GET_ALL_ARTICLES,
  });
  let posts: Post[];
  posts = data.articles.data;

  const rss = await generateRssFeed(posts);

  return (
    <div className="px-10 space-y-10 md:space-y-0 py-10">
      <code>{rss}</code>
    </div>
  );
};

export default page;

function generateRssFeed(allPosts: Post[]) {
    const site_url = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.carnaval-radio.nl'; 
  
    const feedOptions = {
      title: 'Carnaval Radio - Artikelen',
      description: 'Alle artikelen van Carnaval Radio',
      id: site_url ?? '',
      link: site_url,
      image: `${site_url}/logo.png`,
      favicon: `${site_url}/favicon.png`,
      copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
      generator: 'Feed for Node.js',
      feedLinks: {
        rss2: `${site_url}/feed/rss.xml`,
        // other feed formats
        json: `${site_url}/feed/rss.json`,
        atom: `${site_url}/feed/atom.xml`,
      },
    };
  
    const feed = new Feed(feedOptions);
  
    allPosts.forEach((post) => {
      feed.addItem({
        title: post.attributes.Title,
        id: post.id + '-' + post.attributes.Slug,
        link: `${site_url}/blog/${post.attributes.Slug}`,
        description: post.attributes.Content,
        date: new Date(post.attributes.publishedAt),
      });
    });
  
    const rss = feed.rss2();
    console.log(rss);
    fs.writeFileSync('./public/feed/rss.xml', rss);
  
    // write other feed formats to public folder
    fs.writeFileSync('./public/feed/rss.json', feed.json1());
    fs.writeFileSync('./public/feed/atom.xml', feed.atom1());
  
    return rss;
}

