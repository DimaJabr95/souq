
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg text-center">

        <div className="mb-6 text-7xl">🔍</div>

        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Product not found
        </h1>

        <p className="mt-4 text-base leading-7 text-gray-500">
          Oops! We couldn't find the product you're looking for.
          It may have been removed or the link might be incorrect.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
        >
          ← Back to home
        </Link>

      </div>
    </main>
  );
}
