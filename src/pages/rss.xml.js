import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function get(context) {
	const pages = await getCollection('articles');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: pages.map((page) => {
			const [lang, ...slug] = page.slug.split('/');
			return {
				...page.data,
				link: `${lang}/articles/${slug.join('/')}/`,
			}
		}),
	});
}