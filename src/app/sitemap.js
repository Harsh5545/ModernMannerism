import { getPosts } from "@/lib/data";

const WEBSITE_HOST_URL = 'https://modernmannerism.com';

export default async function sitemap() {
    const articles = await getPosts();
    
    const changeFrequency = 'daily';

    const posts = articles.map(({ slug, createdAt }) => ({
        url: `${WEBSITE_HOST_URL}/blog/${slug}`,
        lastModified: createdAt.toISOString(), // Convert Date to ISO 8601 format
        changeFrequency,
    }));

    const routes = ['', '/about', '/contact', '/blog'].map((route) => ({
        url: `${WEBSITE_HOST_URL}${route}`,
        lastModified: new Date().toISOString(), // Convert current date to ISO 8601 format
        changeFrequency,
    }));

    return [
        ...routes,
        ...posts
    ];
}
