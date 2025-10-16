import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.pecolouk.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/dashboard"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
