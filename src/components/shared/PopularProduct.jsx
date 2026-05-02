import Image from "next/image";
import React from "react";

const PopularProduct = ({ product }) => {
  const {name, brand, rating, price, image, category } = product;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="relative w-full aspect-square border rounded-2xl">
        <Image
          src={image}
          alt={name}
          width={300}
          height={200}
          className="object-cover rounded-xl  "
        />
      </figure>
      <div className="card-body">
        <h3>{category}</h3>
        <h2 className="card-title">{name}</h2>
        <p>by {brand}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
