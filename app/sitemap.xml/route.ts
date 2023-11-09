import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import { GET_ALL_SLUGS_FOR_CONTENT_PAGES } from "@/GlobalState/ApiCalls/graphql/page_queries";
import { Post } from "@/types/articleTypes";
import { oldArticles } from "@/public/ProjectData/allNewsArticles";

const URL = process.env.NEXT_PUBLIC_SITE_URL;

function generateSiteMap(sitemapItems: { url: string; lastModified: string }[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     ${sitemapItems
            .map(({ url, lastModified }) => {
                return `
           <url>
               <loc>${url}</loc>
           </url>
           <lastmod>${lastModified}</lastmod>
         `;
            })
            .join("")}
   </urlset>
 `;
}

export async function GET() {
    const posts = await getSitemapUrls();
    const body = generateSiteMap(posts);

    return new Response(body, {
        status: 200,
        headers: {
            "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
            "content-type": "application/xml",
        },
    });
}

async function getSitemapUrls() {
    let sortedPosts = await getPosts();

    const routes = ["", "/nieuws", "/sponsoren", "/social", "/recente-nummers", "/Limburg24", "/verzoekjes", "/tickets"].map((route) => ({
        url: `${URL}${route}`,
        lastModified: new Date().toISOString(),
    }));

    const posts = sortedPosts.map(x => {
        return ({
            url: `${URL}/nieuwsberichten/${x?.attributes?.Slug}`,
            lastModified: x?.attributes?.Date || x?.attributes?.publishedAt,
        });
    });

    let sortedPages = await getPages();

    const pages = sortedPages.map(x => {
        return ({
            url: `${URL}/${x?.attributes?.Slug}`,
            lastModified: x?.attributes?.Date || x?.attributes?.publishedAt,
        });
    });


    const oldArticlesUrls = oldArticles.map(x => {
        return ({
            url: `${URL}/nieuwsberichten/article/${x.title.replace(/[^a-zA-Z0-9\s]/g, "").replaceAll(" ", "-")}`,
            lastModified: x.pubDate

        });
    });

    return [...routes, ...pages, ...posts, ...oldArticlesUrls];
}

async function getPosts() {
    const { data } = await client.query({
        query: GET_ALL_ARTICLES,
    });
    let sortedPosts: Post[];
    sortedPosts = data?.articles?.data;
    return sortedPosts;
}

async function getPages() {
    const { data } = await client.query({
        query: GET_ALL_SLUGS_FOR_CONTENT_PAGES,
    });
    let sortedPages: Post[];
    sortedPages = data?.pages?.data;
    return sortedPages;
}
