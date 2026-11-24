import { getProductDetails } from "@/lib/api";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: PageProps) {

  const { id } = await params;
  const product = await getProductDetails(id);

  if (!product) notFound();

  return (
    <h2>Product Details {id}</h2>
  )

}