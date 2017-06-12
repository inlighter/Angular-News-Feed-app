export interface Article {
    author: string;
    title: string;
    description?: string;
    text?: string;
    url?: string;
    urlToImage?: string;
    publishedAt: string|Date;
    source?: string;
}

