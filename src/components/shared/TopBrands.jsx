"use client";

import { FaAmazon, FaApple, FaMicrosoft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiAdidas, SiNike, SiTesla } from "react-icons/si";

const TopBrands = () => {
  const brands = [
    {
      name: "Amazon",
      category: "Global E-commerce",
      color: "bg-yellow-100 text-yellow-700",
      logo: FaAmazon,
    },
    {
      short: "AP",
      name: "Apple",
      category: "Premium Technology",
      color: "bg-gray-100 text-gray-800",
      logo: FaApple,
    },
    {
      short: "MS",
      name: "Microsoft",
      category: "Cloud & Software",
      color: "bg-blue-100 text-blue-700",
      logo: FaMicrosoft,
    },
    {
      short: "GO",
      name: "Google",
      category: "AI & Search Ecosystem",
      color: "bg-red-100 text-red-700",
      logo: FcGoogle,
    },
    {
      short: "NI",
      name: "Nike",
      category: "Sportswear & Lifestyle",
      color: "bg-black text-white",
      logo: SiNike,
    },
    {
      short: "AD",
      name: "Adidas",
      category: "Athletic Apparel",
      color: "bg-blue-50 text-blue-800",
      logo: SiAdidas,
    },
    {
      short: "SH",
      name: "Shopify",
      category: "E-commerce Platform",
      color: "bg-green-100 text-green-700",
      logo: SiAdidas,
    },
    {
      short: "TS",
      name: "Tesla",
      category: "Smart Mobility & Energy",
      color: "bg-red-50 text-red-700",
      logo: SiTesla,
    },
  ];

  return (
    <section className="py-12 px-6 bg-linear-to-r from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">
          Top Brands
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {brands.map((brand, index) => {
            const Icon = brand.logo; 
            

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <Icon className="text-3xl" />
                </div>
                {/* TEXT */}
                <h3 className="text-lg font-semibold text-gray-800">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {brand.category}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopBrands;