"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <h1 className="text-5xl font-bold mb-4">Post Test</h1>
        <Link
          href={"/posts"}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          View Posts
        </Link>
      </main>
    </>
  );
}
