"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const UpdateInfoPage = () => {
  const [preview, setPreview] = useState("");
  const [namePreview, setNamePreview] = useState("U");

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    await authClient.updateUser({
      name,
      image: photo,
    });

    window.location.reload();
  };

  return (
    <div className=" flex items-center justify-center bg-linear-to-br
     from-green-50 to-white p-6">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 my-10">
        <Link
          href="/my-profile"
          className="text-[#1d9e75] text-sm hover:underline"
        >
          ← Back to My Profile
        </Link>

        <h2 className="text-2xl font-bold text-gray-800 mt-3">
          Update Profile
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Change your name and avatar instantly
        </p>

        {/* Avatar Preview */}
        <div className="flex flex-col items-center mb-6">
          {preview ? (
            <div className="relative w-24 h-24">
              <Image
                src={preview}
                alt="preview"
                width={50}
                height={50}
                className="rounded-full object-cover shadow-md border-4 border-green-100"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          ) : (
            <div
              className="w-24 h-24 rounded-full 
            bg-linear-to-r from-[#1d9e75] to-green-600 flex items-center
             justify-center text-white text-2xl font-bold shadow-md"
            >
              {namePreview.charAt(0).toUpperCase()}
            </div>
          )}

          {/* fallback test image */}
          {preview && (
            <Image
              width={50}
              height={50}
              src={preview}
              alt="fallback-test"
              className="hidden"
              onError={(e) => {
                setPreview("");
              }}
            />
          )}

          <span className="text-xs text-green-600 mt-2">Live Preview</span>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setNamePreview(e.target.value || "U")}
              className="w-full mt-1 px-3 py-2 border 
              rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm text-gray-600">Photo URL</label>
            <input
              type="text"
              name="photo"
              onChange={(e) => setPreview(e.target.value)}
              placeholder="Paste image URL..."
              className="w-full mt-1 px-3 py-2 border rounded-lg
               focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-linear-to-r from-[#1d9e75]
           to-green-600 hover:opacity-90 text-white py-2.5 rounded-lg 
           font-semibold transition-all">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateInfoPage;
