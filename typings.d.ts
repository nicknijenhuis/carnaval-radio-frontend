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
