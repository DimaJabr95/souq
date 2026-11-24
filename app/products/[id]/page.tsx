import { getProductDetails } from "@/lib/api";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";


type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) return { title: "Product not found" };

  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductDetails({ params }: PageProps) {



  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) notFound();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">

        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black"
        >
          ← Back to products
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 gap-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">


          {/* Image */}
          <div className="relative aspect-square w-full rounded-xl bg-gray-50">
            <Image
              src={product.images[0] || product.thumbnail}
              alt={product.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain p-6"
              priority
            />
          </div>

          {/* Product information */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              {product.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              {product.title}
            </h1>

            {/* Brand */}
            {product.brand && (
              <p className="mt-3 text-sm text-gray-500">
                Brand: <span className="font-semibold text-gray-800">{product.brand}</span>
              </p>
            )}

            {/* Price and rating */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <p className="text-3xl font-bold text-gray-900">
                ${product.price}
              </p>

              <span className="rounded-full bg-yellow-50 px-3 py-1 text-sm font-medium text-yellow-700">
                ★ {product.rating} / 5
              </span>
            </div>

            {/* Description */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h2 className="mb-3 text-lg font-semibold text-gray-900">
                Description
              </h2>
              <p className="text-base leading-7 text-gray-600">
                {product.description}
              </p>
            </div>

            {/* Stock */}
            <div className="mt-6">

              {product.stock === 0 ? (
                <p className="font-semibold text-gray-500">Out of stock</p>
              ) : product.stock < 10 ? (
                <p className="font-semibold text-red-600">Only {product.stock} left!</p>
              ) : (
                <p className="font-semibold text-green-600">In stock</p>
              )}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
