"use client";
import { Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";


const PopularProduct = ({ product }) => {
  const {id, name, brand, rating, price, image, category } = product;
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
           <Chip className="bg-white/80 backdrop-blur-md text-[#1d9e75] font-bold border-none shadow-sm">{category}</Chip>
        </div>
        <button className="absolute bottom-4 right-4 bg-[#1d9e75] text-white p-3 rounded-2xl shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#1d9e75]">
           <FaShoppingCart />
        </button>
      </div>
      
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-xs font-bold text-[#1d9e75] uppercase tracking-widest mb-1">{brand}</p>
            <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{name}</h2>
          </div>
          <div className="flex items-center gap-1 bg-secondary/10 text-[#ffb303] px-2 py-1 rounded-lg text-sm font-bold">
            <FaStar size={12} />
            {rating}
          </div>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="text-2xl font-black text-gray-900">${price}</div>
          <Link 
            href={`/products/${id}`} 
            className="text-sm font-bold text-[#1d9e75] hover:underline transition-all"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PopularProduct;
