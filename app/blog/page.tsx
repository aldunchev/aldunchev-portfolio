import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Alex Dunchev Personal Website",
  description: "Read my blog and learn more about me.",
};

export default function Page() {
  return (
    <section>
      <div className="container">
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          My latest blog posts
        </h1>
        <BlogPosts />
      </div>
    </section>
  );
}
