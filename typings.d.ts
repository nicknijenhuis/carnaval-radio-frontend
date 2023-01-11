import { MDXRemoteSerializeResult } from "next-mdx-remote";
export interface Post {
  attributes: {
    CoverImage: {
        data: {
            attributes: {
                url: string;
            }
        }
    };
    Title: string;
    publishedAt: string;
    Slug: string;
    content: string;
  };
}

export interface singlePost {
  Title: string;
  Content: string;
  publishedAt: string;
  author:{
    data:{
      attributes:{
        name: string
      }
    }
  }
  CoverImage: {
    data: {
        attributes: {
            url: string;
        }
    }
};
}