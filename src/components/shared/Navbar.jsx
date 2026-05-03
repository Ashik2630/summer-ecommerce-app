"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import { ClipLoader } from "react-spinners";
import { div } from "framer-motion/client";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
      <li>
        <NavLink href="/my-profile">My Profile</NavLink>
      </li>
    </>
  );
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSingOut = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#1d9e75] font-bold flex"
          >
            {links}
          </ul>
        </div>
        <Link
          href={"/"}
          className="text-2xl font-bold flex items-center gap-2 text-[#1d9e75]"
        >
          <FaShoppingCart />
          SummerCart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#1d9e75] font-bold flex">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          {!user && (
            <ul className="flex items-center gap-2 ">
              <li>
                <Button variant="outline" className="">
                  <Link href={"/singup"}>Register</Link>
                </Button>
              </li>
              <li>
                <Button className="bg-[#1d9e75] text-white px-6">
                  <Link href={"/singin"}>Login</Link>
                </Button>
              </li>
            </ul>
          )}
          {userData.isPending ? (
            <div className="flex justify-center items-center mb-10 ">
              <ClipLoader className="text-xs"/>
            </div>
          ) : user ? (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image
                  alt={user.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button
                onClick={handleSingOut}
                className="bg-[#1d9e75] text-white"
              >
                SingOut
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
