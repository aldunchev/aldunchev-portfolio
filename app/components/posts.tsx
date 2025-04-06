import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <nav>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:underline pb-4 border-b border-gray-200 last:border-b-0"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col">
              <h2 className="text-neutral-900 font-semibold tracking-tight">
                {post.metadata.title}
              </h2>
              <span className="text-neutral-60 text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </span>
            </div>
          </Link>
        ))}
    </nav>
  );
}
