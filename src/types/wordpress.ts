  export interface WPPost {
    id: number;
    date: string;
    link: string;
    slug: string ;
    title: { rendered: string };
    excerpt: { rendered: string };
    content: { rendered: string };
    categories: Array<number>;
    tags: Array<number>;
    acf: {
      reading_time?: string,
      author?: string,
      author_field?: string,
      date?: string,
      author_img? : number;
    };
    _embedded?: {
      "wp:featuredmedia"?: Array<{
        id: number;
        source_url: string;
        alt_text: string;
      }>;
      "wp:term"?: Array<
        Array<{
          id: number;
          name: string;
          slug: string;
          taxonomy: string;
        }>
      >;
    };
  }


export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export interface WPTag {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: "post_tag";
  meta: any[]; // usually empty, but keep it flexible
}

export interface WPTagsAndContent {
  content: string;
  tags: Array<{
    id: number;
    name: string;
    slug: string;
    taxonomy: string;
  }>;
}


export interface WPTermTag {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
  count?: number;
  description?: string;
  link?: string;
  meta?: any;
}