import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface ContentPage {
  attributes: {
    Slug: string;
  }
}

export interface SingleContentPage {
  Title: string;
  Content: string;
}