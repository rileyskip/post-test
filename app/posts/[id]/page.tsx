import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function PostDetails({ params }: Props) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" },
  );
  const post: any = await response.json();

  return (
    <>
      <article key={post.id}>
        <div className="mb-10 p-6">
          <p className="tracking-wider text-xs font-bold text-gray-400">
            POST {post.id}
          </p>
          <p className="text-3xl font-bold mb-2">{post.title}</p>
          <p className="text-md mb-4">{post.body}</p>
          <Link
            href={`/posts`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            ← Back to Posts
          </Link>
        </div>
      </article>
      ;
    </>
  );
}
