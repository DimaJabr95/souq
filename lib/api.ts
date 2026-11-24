import { Product } from "@/types/product";
import { cacheLife } from "next/cache";

export async function  getProducts() : Promise<Product[]> {
const response = await fetch("https://dummyjson.com/products?limit=12");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

 const data: { products: Product[] } = await response.json();

  return data.products
}

export async function getProductDetails(id: string) : Promise<Product | null>  {

    "use cache"
    cacheLife("hours")

const response = await fetch(`https://dummyjson.com/products/${id}`);

 if (!response.ok) {
    throw new Error(`Failed to fetch products ${id}`);
  }

   if (response.status === 404) return null;

   const product: Product = await response.json();

  return product

}


