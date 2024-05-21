import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <Link href={'/blog'}>
        <h2 className="text-[30px] transition-all hover:text-red-500 hover:underline">Blog</h2>
      </Link>

    </main>
  );
}