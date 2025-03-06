import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Alex Dunchev Personal Website',
  description: 'Read my blog and learn more about me.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Welcome to my personal website</h1>
      <BlogPosts />
    </section>
  )
}
