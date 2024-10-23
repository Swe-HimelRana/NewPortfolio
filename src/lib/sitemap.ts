import { SitemapStream, streamToPromise } from 'sitemap';

interface Page {
    url: string;
    changefreq: string;
    priority: number;
}

const generateSitemap = async (): Promise<string> => {
    const baseUrl = 'https://himelrana.com';

    // Define the routes you want to include
    const pages: Page[] = [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/about', changefreq: 'weekly', priority: 0.8 },
        { url: '/experience-skills', changefreq: 'weekly', priority: 0.8 },
        { url: '/education', changefreq: 'weekly', priority: 0.8 },
        { url: '/contact', changefreq: 'weekly', priority: 0.8 },
        // Fetch additional routes dynamically if needed
    ];

    // Create a sitemap stream
    const sitemapStream = new SitemapStream({ hostname: baseUrl });

    // Add each page to the sitemap stream
    pages.forEach(page => sitemapStream.write(page));
    sitemapStream.end();

    // Convert the stream to a string
    const sitemapXML = await streamToPromise(sitemapStream).then(sm => sm.toString());

    return sitemapXML;
};

export default generateSitemap;