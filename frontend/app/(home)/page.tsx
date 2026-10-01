// import LangRedirect from './components/LangRedirect';
import {sectionRenderer} from '../utils/section-renderer';
import {getPageBySlug} from "../utils/get-page-by-slug";
import {i18n} from '../../i18n-config';

export default async function RootRoute() {
    const page = await getPageBySlug('home', i18n.defaultLocale);
    //if (page.data.length == 0 && params.lang !== "en") return <LangRedirect/>
    if (!page.data || page.data.length === 0) return null;
    const contentSections = page.data[0].attributes.contentSections;
    return contentSections.map((section: any, index: number) => sectionRenderer(section, index));
}
