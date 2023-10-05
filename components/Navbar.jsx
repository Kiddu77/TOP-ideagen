import React from "react";
import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="mx-4 flex items-center justify-between my-6">
      <Link href="/"> <Image src={Logo} className="w-48 h-12" /></Link>
     
      <ul className="flex items-center space-x-8 text-xl">
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Early Access</li>
        <li className="cursor-pointer">Users</li>
        <li className="cursor-pointer">Podcasts and Blogs</li>
      </ul>
      <a
        href="#"
        className="text-md uppercase font-bold px-4 py-2 border-2 border-black rounded-full"
      >
        Join Now
      </a>
    </div>
  );
};

export default Navbar;
