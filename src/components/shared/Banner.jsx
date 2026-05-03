

const Banner = () => {
  return (
    <div>
      <section className="w-full bg-linear-to-r from-[#61b097] via-[#419f81] to-[#1d9e75] text-white py-40 px-6  shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-sm font-semibold opacity-90">
              Limited Time Offer
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Summer Sale ☀️ <br />
              <span className="text-yellow-100">50% OFF</span> on Everything
            </h1>

            <p className="text-lg opacity-90">
              Hot deals on sunglasses, sunscreens, beach gear & more
            </p>

            <button className="bg-white text-orange-500 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-gray-100 transition">
              Shop Now
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center text-sm md:text-base font-medium">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl">
              🔥 Hot Deals
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl">
              🚚 Free Shipping over $30
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl">
              ✨ New Arrivals
            </div>
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl">
              🔁 Easy Returns
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
