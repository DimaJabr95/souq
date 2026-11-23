
import { cacheLife } from "next/cache";
import ProductCard from "../components/product/ProductCard";
import { getProducts } from "@/lib/api";

export default async function Home() {
  "use cache";
  cacheLife("hours");

  const products = await getProducts();


  return (
    <div className="min-h-screen bg-gray-50">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* Hero Section */}
        <section className="mb-10">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Discover our collection
          </p>

          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Find your next favorite.
          </h1>

          <p className="text-gray-500 max-w-xl">
            Explore our curated collection of quality products at great prices.
          </p>
        </section>

        {/* Products Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </ul>

      </main>
    </div>
  );
}
