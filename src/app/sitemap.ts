import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pecolouk.com";

  //  Static Pages
  const staticPages = ["", "about-us", "services", "contact"].map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  //  Blog Pages (from your blogData file)
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  // Combine both
  return [...staticPages, ...blogPages];
}
