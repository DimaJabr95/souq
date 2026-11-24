
"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorProps) {

    useEffect(() => {
  console.error(error);
}, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-12">

        {/* Error icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <span className="text-4xl" aria-hidden="true">⚠️</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Something went wrong!
        </h1>

        {/* Friendly message */}
        <p className="mt-4 text-base leading-7 text-gray-500">
          We're sorry, but we couldn't load this page.
          Please try again in a moment.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <button
            onClick={reset}
            className="w-full rounded-lg bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 sm:w-auto"
          >
            Try again
          </button>

          <Link
            href="/"
            className="w-full rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
          >
            ← Back to home
          </Link>

        </div>
      </div>
    </main>
  );
}
