import Counter from "./counter";
import Link from "next/link";

interface Post {
  userid: number;
  id: number;
  title: string;
  body: string;
}

export default async function PostPage() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",
    { cache: "no-store" },
  );
  const post: Post[] = await response.json();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 className="text-5xl font-bold mb-4">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
        {post.map((post: any) => (
          <article key={post.id}>
            <div className="flex flex-col shadow-lg h-full rounded-lg p-6 ">
              <p className="tracking-wider text-xs font-bold text-gray-400">
                POST {post.id}
              </p>
              <Counter />
              <p className="text-2xl font-bold mb-2">{post.title}</p>
              <p className="text-md mb-4">{post.body}</p>
              <Link
                href={`/posts/${post.id}`}
                className="bg-blue-500 mt-auto w-[160px] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Read full post →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
