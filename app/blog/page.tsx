const posts = [
  { title: "How I Scale Infrastructure for AI Startups", slug: "scale-ai" },
  { title: "From ML Engineer to Tech Lead", slug: "career" },
  { title: "Designing Reliable Production Systems", slug: "reliability" }
];

export default function Blog() {
  return (
    <main className="max-w-5xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-10">Writing</h1>
      <div className="space-y-6">
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="block border-b border-gray-800 pb-4">
            <h2 className="text-xl">{p.title}</h2>
          </a>
        ))}
      </div>
    </main>
  );
}
