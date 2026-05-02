import { Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

const PopularProduct = ({ product }) => {
  const {name, brand, rating, price, image, category } = product;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="relative w-full aspect-square  rounded-2xl bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="object-cover rounded-2xl shadow"
        />
        <Chip className="absolute top-8 right-5 text-[#1d9e75]">{category}</Chip>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-gray-400">by {brand}</p>
        <div className="flex justify-between ">
            <div className="text-[#e99230]">${price}</div>
            <div className="flex items-center gap-1"><FaStar className="text-[#e99230]"/>{rating}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-[#1d9e75] w-full text-white rounded-xl">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
