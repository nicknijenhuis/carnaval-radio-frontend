export interface Post {
  id: string;
  attributes: {
    CoverImage: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    Title: string;
    publishedAt: string;
    Slug: string;
    Content: string;
    Date?: any;
  };
  title?: string;
  description?: any;
  slug?: any;
  pubDate?: any;
}

export interface singlePost {
  Title: string;
  Content: string;
  publishedAt: string;
  author: {
    data: {
      attributes: {
        name: string;
      };
    };
  };
  CoverImage: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}
