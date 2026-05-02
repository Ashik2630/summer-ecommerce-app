import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-yellow-100 via-orange-100 to-green-100 px-4">
      <div className="text-center max-w-lg">
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-white shadow-lg p-6 rounded-full">
            <FaShoppingBag className="text-5xl text-[#1d9e75]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold text-[#1d9e75] mb-4">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          Looks like this product or page went on a summer vacation ☀️🏝️  
          Don’t worry, you can explore our latest deals and collections!
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/">
            <button className="px-6 py-3 rounded-full bg-[#1d9e75] text-white font-semibold shadow-md hover:bg-[#158f67] transition">
              Back to Home
            </button>
          </Link>

          <Link href="/products">
            <button className="px-6 py-3 rounded-full border border-[#1d9e75] text-[#1d9e75] font-semibold hover:bg-[#1d9e75] hover:text-white transition">
              Browse Products
            </button>
          </Link>
        </div>

        {/* Extra Footer Note */}
        <p className="mt-8 text-sm text-gray-400">
          Summer Sale is still ON 🔥 Don’t miss out!
        </p>
      </div>
    </div>
  );
};

export default NotFound;