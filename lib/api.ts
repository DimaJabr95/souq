import { Product } from "@/types/product";

export async function  getProducts() : Promise<Product[]> {
const response = await fetch("https://dummyjson.com/products?limit=12");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

 const data: { products: Product[] } = await response.json();
 
  return data.products
}