import React from "react";

import ArticleSelect from "../../components/ArticleSelect";
import { fetchAPI } from "../../utils/fetch-api";

export default async function LayoutRoute({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    slug: string;
    category: string;
  };
}) {
  return (
    <div className="-m-6">
      {children}
    </div>
  );
}

// export async function generateStaticParams() {
//   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//   const path = `/projects`;
//   const options = { headers: { Authorization: `Bearer ${token}` } };
//   const articleResponse = await fetchAPI(
//     path,
//     {
//       populate: ["categories"],
//     },
//     options
//   );

//   return articleResponse.data.map(
//     (article: {
//       attributes: {
//         slug: string;
//         category: {
//           slug: string;
//         };
//       };
//     }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
//   );
// }
