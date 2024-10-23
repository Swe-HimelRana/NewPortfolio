import generateSitemap from '../../../lib/sitemap';

export async function GET(): Promise<Response> {
    const sitemapXML = await generateSitemap();
    return new Response(sitemapXML, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}