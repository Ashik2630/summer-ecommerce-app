import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-700 text-gray-300 pt-12 pb-6 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* <!-- Brand --> */}
          <div>
            <Link href={"/"} className="text-2xl font-bold flex items-center gap-2 text-[#F0AF0C]">
          <FaShoppingCart className="text-[#F0AF0C]" />
          SummerCart
        </Link>
            <p className="mt-3 text-sm text-gray-400">
              Your one-stop shop for summer essentials. Discover hot deals on
              fashion, beach gear, and more.
            </p>

            {/* <!-- Social --> */}
            <div className="flex gap-4 mt-4 text-lg">
              <a href="#" className="hover:text-white">
                🌐
              </a>
              <a href="#" className="hover:text-white">
                📘
              </a>
              <a href="#" className="hover:text-white">
                📸
              </a>
              <a href="#" className="hover:text-white">
                🐦
              </a>
            </div>
          </div>

          {/* <!-- Quick Links --> */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Hot Deals 🔥
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  New Arrivals ✨
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Support --> */}
          <div>
            <h3 className="text-white font-semibold mb-3">Customer Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Newsletter --> */}
          <div>
            <h3 className="text-white font-semibold mb-3">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get special offers and updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-lg border border-gray-500 outline-none"
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-lg text-white hover:bg-orange-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Bottom --> */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © 2026 SummerCard. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
