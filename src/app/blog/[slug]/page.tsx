import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogData";
import Image from "next/image";

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-30 bg-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg mb-2">{post.excerpt}</p>

          <div className="text-sm text-gray-500 flex flex-wrap justify-center items-center gap-2 mb-4">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Tags */}
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Hero Image */}
          {/* {post.image && (
            <div className="mt-8">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={600}
                className="rounded-xl shadow-md object-cover w-full h-auto"
                priority
              />
            </div>
          )} */}
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <article className="prose prose-lg prose-brand dark:prose-invert max-w-none break-words whitespace-pre-wrap">
            {post.content.split("\n").map((line, idx) => {
              // If line starts with "##", render as heading (bold)
              if (line.trim().startsWith("##")) {
                return (
                  <p key={idx} className="font-bold text-xl mt-6 mb-3">
                    {line.replace(/^##\s*/, "")}
                  </p>
                );
              }

              // Handle bold text (**...**)
              const parts = line.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={idx} className="leading-relaxed">
                  {parts.map((part, i) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={i} className="font-semibold">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold text-center mb-8">
            You might also like
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter((p) => p.slug !== post.slug) // exclude current post
              .slice(0, 3) // limit to 3 related posts
              .map((related) => (
                <div
                  key={related.slug}
                  className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* <Image
                    src={related.image}
                    alt={related.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  /> */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-brand-brown mb-2 line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {related.excerpt}
                    </p>
                    <a
                      href={`/blog/${related.slug}`}
                      className="text-brand-brown font-semibold text-sm hover:underline"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
