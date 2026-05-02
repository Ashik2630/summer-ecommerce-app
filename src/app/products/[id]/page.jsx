import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://summer-ecommerce-app.vercel.app/productsData.json",
  );
  const products = await res.json();

  const product = products.find((p) => p.id == id);
  const { name, brand, rating, price, image, category, description, stock } =
    product;
  console.log(product);

  return (
    <div className="container mx-auto my-10">
      <div className=" card bg-base-100 w-full h-200 shadow-sm ">
        <figure className="relative w-full aspect-square rounded-2xl bg-gray-100">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="object-cover rounded-2xl shadow"
          />
          <Chip className="absolute top-8 right-130 text-[#1d9e75]">
            {category}
          </Chip>
        </figure>
        <div className="pt-10 space-y-2">
          <h2 className="card-title">{name}</h2>
          <p className="text-gray-400">by {brand}</p>
          <div className="grid grid-cols-3 gap-5">
            <div className="card ">
              <p className="text-gray-500 text-xs">Price</p>
              <div className="text-[#e99230]">${price}</div>
            </div>
            <div className="card">
              <p className="text-gray-500 text-xs">Rating</p>
              <div className="flex items-center gap-1">
                <FaStar className="text-[#e99230]" />
                {rating}
              </div>
            </div>
            <div className="card ">
              <p className="text-gray-500 text-xs">In Stock</p>
              <div className="text-[#e99230]">{stock}</div>
            </div>
          </div>
          <p className="text-gray-500">{description}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-[#1d9e75] w-full text-white rounded-xl mt-2 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
