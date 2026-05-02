"use client";

const TopBrands = () => {
  const brands = [
    {
      short: "SS",
      name: "SunShade",
      category: "Eyewear",
      color: "bg-green-100 text-green-700",
    },
    {
      short: "GS",
      name: "GlowShield",
      category: "Skincare",
      color: "bg-red-100 text-red-700",
    },
    {
      short: "SM",
      name: "ShadeMax",
      category: "Beach Gear",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      short: "AQ",
      name: "AquaCool",
      category: "Hydration",
      color: "bg-blue-100 text-blue-700",
    },
  ];
  return (
    <div>
      <section className="py-12 px-6 bg-linear-to-r from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">Top Brands</h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center mx-auto rounded-lg mb-4 font-semibold ${brand.color}`}
                >
                  {brand.short}
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-500">{brand.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopBrands;
