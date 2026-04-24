"use client";

import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

type Product = {
  id: number;
  title: string;
  images: string[];
};

const fetchData = async () => {
  const response = await fetch("https://daummyjson.com/products");
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  if (isError) return <p className="text-red-500">error</p>;
  if (isLoading) return <p>loading...</p>;

  return (
    <div className="grid grid-cols-7 gap-10 p-3">
      {data.products.map((product: Product) => (
        <div key={product.id} className="border p-2">
          <p>{product.title}</p>
          <Image
            src={product.images[0]}
            alt={product.title}
            width={400}
            height={400}
          />
        </div>
      ))}
    </div>
  );
}
