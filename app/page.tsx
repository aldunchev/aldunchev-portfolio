import { BlogPosts } from "app/components/posts";
import Link from "next/link";
export default function Page() {
  return (
    <>
      <section className="mb-8">
        <div className="container">
          <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Welcome to my personal website
          </h1>
          <p className="mb-4">
            I'm Alexander Dunchev, a front-end developer passionate about
            creating accessible, high-performing websites.
          </p>
          <p className="mb-4">
            I have a strong affinity for Drupal and continuously seek ways to
            enhance the user experience.
          </p>
          <p>
            Checkout the <Link href="/about-me">About Me</Link> page to learn
            more about me.
          </p>
        </div>
      </section>
      <section className="mb-8">
        <div className="container">
          <h2 className="text-lg font-semibold mb-4">Latest Blog Posts</h2>
          <BlogPosts />
        </div>
      </section>
    </>
  );
}
