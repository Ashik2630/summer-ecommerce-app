export const metadata = {
  title: "SummerCart || ProductDetails-Page",
};
import BackButton from "@/components/shared/BackButton";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import { FaShieldAlt, FaShoppingCart, FaStar, FaTruck } from "react-icons/fa";

const ProductDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    "https://summer-ecommerce-app.vercel.app/productsData.json",
  );
  const products = await res.json();

  const product = products.find((p) => p.id == id);
  const { name, brand, rating, price, image, category, description, stock } =
    product;

  return (
   <div className="bg-summer-bg min-h-screen pb-20">
      <div className="container mx-auto px-6 py-10">
        <div className="mb-8">
          <BackButton />
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 bg-gray-50 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg">
                <Image
                  src={image}
                  alt={name}
                  fill
                  priority
                  className="object-cover rounded-3xl shadow-2xl"
                />
                <Chip className="absolute top-6 left-6 bg-white/80 backdrop-blur-md text-[#1d9e75] font-bold border-none shadow-lg">
                  {category}
                </Chip>
              </div>
            </div>

            {/* Details Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <p className="text-[#1d9e75] font-bold uppercase tracking-widest text-sm mb-2">{brand}</p>
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">{name}</h1>
              </div>

              <div className="flex items-center gap-6 mb-8">
                <div className="text-3xl font-black text-gray-900">${price}</div>
                <div className="flex items-center gap-1.5 bg-secondary/10 text-[#ffb303] px-3 py-1.5 rounded-xl font-bold">
                  <FaStar /> {rating}
                </div>
                <div className={`px-3 py-1.5 rounded-xl font-bold text-sm ${stock > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                  {stock > 0 ? `In Stock (${stock})` : 'Out of Stock'}
                </div>
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-10 border-l-4 border-primary/20 pl-6 italic">
                {description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-sm">
                <div className="flex items-center gap-3 text-gray-500 bg-gray-50 p-4 rounded-2xl">
                  <FaTruck className="text-[#1d9e75] text-xl" />
                  <span>Free Express Shipping</span>
                </div>
                <div className="flex items-center gap-3 text-gray-500 bg-gray-50 p-4 rounded-2xl">
                  <FaShieldAlt className="text-[#1d9e75] text-xl" />
                  <span>2 Year Global Warranty</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-[#1d9e75] text-white font-bold h-16 rounded-2xl
                   grow shadow-lg shadow-[#1d9e75] hover:scale-105 transition-transform"
                >
                  <FaShoppingCart /> Add to Cart
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="h-16 rounded-2xl border-2 border-gray-500 font-bold hover:scale-105 transition-transform"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
