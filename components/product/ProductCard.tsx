import { Product } from "@/types/product";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};


export default function ProductCard({ product }: ProductCardProps) {

  return (
    <li className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <Link
        href={`/products/${product.id}`}
        className="w-full rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto"
      >
        ← Back to home

        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {product.title}
          </h3>

          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-blue-600">
              ${product.price}
            </p>

            <p className="text-sm text-yellow-500">
              ⭐ {product.rating}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}