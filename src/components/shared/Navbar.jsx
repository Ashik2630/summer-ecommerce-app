"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";


const Navbar = () => {
  const links = (
    <div className="text-[#1d9e75] font-bold flex">
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
      <li>
        <NavLink href="/my-profile">My Profile</NavLink>
      </li>
    </div>
  );
  const userData = useSession();
  const user = userData.data?.user;
  
  const handleSingOut = async() => {
    await authClient.signOut();
      window.location.href = "/"; 
  }

  return (
    <div className="navbar bg-base-100 shadow-sm px-10">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {!user && (
            <ul className="flex items-center gap-2">
              <li>
                <Link className="btn bg-[#105d39] text-white" href={"/singup"}>
                  SingUp
                </Link>
              </li>
              <li>
                <Link className="btn bg-[#105d39] text-white" href={"/singin"}>
                  SingIn
                </Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex items-center gap-3">
              <Avatar>
                <Avatar.Image
                  alt={user.name}
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleSingOut} variant="danger" >SingOut</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
