"use strict";

/**
 * `page-populate-middleware` middleware
 */

const populate = {
  contentSections: {
    on: {
      "sections.hero": {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          buttons: true,
        },
      },
      "sections.introduction": {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          pictureMobile: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
          buttons: true,
        },
      },
      "sections.location-contact": {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      "sections.services": {
        populate: { content: true },
      },
      "sections.heading-rich-text": {
        fields: ["title", "content"],
      },
    },
  },
  seo: {
    fields: ["metaTitle", "metaDescription"],
    populate: { shareImage: true },
  }
};

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query?.filters?.slug },
      locale: ctx.query.locale,
    };

    await next();
  };
};
