export const metadata = {
  title: "SummerCart || ProductsPage",
};

import Category from "@/components/shared/Category";
import PopularProduct from "@/components/shared/PopularProduct";
import React from "react";

const ProductsPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);
  const res = await fetch(
    "https://summer-ecommerce-app.vercel.app/productsData.json",
  );
  const products = await res.json();

  const filteredProducts = category
    ? products.filter(
        (product) => product.category.toLowerCase() == category.toLowerCase(),
      )
    : products;

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold mb-5 text-[#1d9e75] mx-5 md:mx-0">
        ALL Products
      </h1>
      <Category />
      <div className="grid md:grid-cols-4 gap-5 mx-5 md:mx-0">
        {filteredProducts.map((product) => (
          <PopularProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
