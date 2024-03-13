import { getPosts } from "@/lib/data";


const WEBSITE_HOST_URL = 'https://modernmannerism.com'




export default async function sitemap() {
    const articals = await getPosts();
    
    const changeFrequency = 'daily'

    const posts = articals.map(({slug,createdAt})=> ({
        url: `${WEBSITE_HOST_URL}/blog/${slug}`,
        lastModified:createdAt ,
        changeFrequency,
    }));

    const routes = ['', '/about', '/contact', '/blog'].map((route) => ({
        url: `${WEBSITE_HOST_URL}${route}`,
        lastModified: new Date().toString(),
        changeFrequency,
    }))

    return [
        ...routes,...posts
    ]
}