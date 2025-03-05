declare namespace News {
  export interface IResponseNewsItem {
    article_id: string;
    description: string;
    title: string;
    image_url: string;
  }

  export interface IResponse {
    status: string;
    totalResults: string;
    results: IResponseNewsItem[];
  }

  export interface Item {
    id: string;
    title: string;
    img: string | null;
    content: string;
  }

  export interface ICategory {
    title: string;
    subtitle: string;
    imageURL: string;
  }

  export interface Item_ {
    id?: string;
    title: string;
    slug: string;
    image: string;
    summary: string;
    content: string;
    author: string;
    author_email: string;
    date: number;
    category: string;
  }
}