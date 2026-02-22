import { SectionWrapper } from "@/app/components/ui";

// TODO: Replace with actual blog posts from a CMS or MDX files
const posts = [
  {
    slug: "scale-ai",
    title: "How I Scale Infrastructure for AI Startups",
    excerpt: "Lessons learned from building production ML systems.",
    date: "Coming Soon",
    published: false,
  },
  {
    slug: "career",
    title: "From ML Engineer to Tech Lead",
    excerpt: "The transition from individual contributor to technical leader.",
    date: "Coming Soon",
    published: false,
  },
  {
    slug: "reliability",
    title: "Designing Reliable Production Systems",
    excerpt: "Principles for building systems that don't break at 3 AM.",
    date: "Coming Soon",
    published: false,
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black text-gray-900 dark:text-white pt-24">
      <SectionWrapper title="Writing" showBorder={false}>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Thoughts on infrastructure, AI/ML, and technical leadership.
        </p>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className={`
                p-6 rounded-xl border border-gray-200 dark:border-gray-800/50
                ${post.published ? "hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/30 cursor-pointer" : "opacity-60"}
                transition-all duration-300
              `}
            >
              {post.published ? (
                <a href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{post.date}</p>
                </a>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{post.excerpt}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{post.date}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
