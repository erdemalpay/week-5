import Link from "next/Link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </div>
  );
}
