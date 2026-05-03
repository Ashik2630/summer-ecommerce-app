import { roboto } from "@/app/layout";
import {
  Sun,
  Droplets,
  Shirt,
  IceCream,
  TreePalm,
  GlassWater,
} from "lucide-react";

const SummerCareSection = () => {
  const tips = [
    {
      icon: <Sun size={28} />,
      title: "Sun Protection",
      desc: "Apply SPF 30+ sunscreen 20 minutes before going out.",
      bg: "bg-yellow-50",
    },
    {
      icon: <Droplets size={28} />,
      title: "Stay Hydrated",
      desc: "Drink at least 8–10 glasses of water daily.",
      bg: "bg-blue-50",
    },
    {
      icon: <Shirt size={28} />,
      title: "Light Clothing",
      desc: "Wear breathable cotton clothes to stay cool.",
      bg: "bg-pink-50",
    },
    {
      icon: <IceCream size={28} />,
      title: "Cool Treats",
      desc: "Enjoy fresh fruits and cold desserts.",
      bg: "bg-purple-50",
    },
    {
      icon: <TreePalm size={28} />,
      title: "Avoid Heat",
      desc: "Stay indoors during peak sunlight hours.",
      bg: "bg-green-50",
    },
    {
      icon: <GlassWater size={28} />,
      title: "Electrolytes",
      desc: "Drink ORS or coconut water for energy.",
      bg: "bg-cyan-50",
    },
  ];



  return (
    <div className={`${roboto.className}`}>
      <section className="py-12 px-6 bg-linear-to-br from-[#f0fdf4] to-[#ecfeff]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            🌞 Summer Care Tips
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className={`${tip.bg} p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1 cursor-pointer`}
              >
                <div className="mb-4 text-gray-700">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {tip.title}
                </h3>
                <p className="text-sm text-gray-600">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SummerCareSection;
