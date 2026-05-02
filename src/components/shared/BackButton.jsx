"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 bg-[#1d9e75] text-white px-4 py-2 rounded-md hover:bg-[#1d9e75] transition"
    >
      ← Back
    </button>
  );
};

export default BackButton;
