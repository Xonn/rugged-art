import qs from "qs";
import { getStrapiURL } from "./api-helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    const requestOptions = options as RequestInit;

    // Merge default and user options
    const mergedOptions = {
      next: { revalidate: 60 },
      ...options,
      headers: {
        "Content-Type": "application/json",
        // Strapi 5 returns a flattened document by default. Keep the existing
        // v4-shaped contract while the frontend is migrated incrementally.
        "Strapi-Response-Format": "v4",
        ...Object.fromEntries(new Headers(requestOptions.headers).entries()),
      },
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
      const body = await response.text();
      throw new Error(
        `Strapi responded with ${response.status} ${response.statusText}: ${body.slice(0, 500)}`
      );
    }

    const data = await response.json();
    return data;
    
  } catch (error) {
    console.error(error);
    throw new Error(
      `Strapi request failed (${getStrapiURL()}): ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}
