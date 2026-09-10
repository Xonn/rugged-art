export const i18n = {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de', 'cs'],
} as const;

export type Locale = typeof i18n['locales'][number];
