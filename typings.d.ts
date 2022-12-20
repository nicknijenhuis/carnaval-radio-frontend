import { MDXRemoteSerializeResult } from "next-mdx-remote";
export interface Post {
  attributes: {
    coverPhoto: {
        data: {
            attributes: {
                url: string;
            }
        }
    };
    title: string;
    publishedAt: string;
    Slug: string;
    content: string;
  };
}

export interface singlePost {
  title: string;
  content: string;
  publishedAt: string;
  author:{
    data:{
      attributes:{
        name: string
      }
    }
  }
  coverPhoto: {
    data: {
        attributes: {
            url: string;
        }
    }
};
}