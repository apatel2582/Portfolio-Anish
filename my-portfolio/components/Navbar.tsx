// components/Navbar.tsx

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked", !isOpen); // This will log the updated state
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    console.log("Close menu clicked", false); // This will log the updated state
    setIsOpen(false);
  };
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-zinc-200 to-zinc-800/30 dark:from-zinc-800 dark:to-gray-900 p-4 z-50 backdrop-blur-2xl border-b border-gray-300 dark:border-neutral-800">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold text-base">
          {/* Logo or Branding */}
          <span>My Portfolio</span>
        </div>
        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center`}
        >
          <Link
            href="#profile"
            className="hover:text-gray-400 p-2 lg:p-0 lg:mr-4"
            onClick={closeMenu}
          >
            Profile
          </Link>
          <Link
            href="#skills"
            className="hover:text-gray-400 p-2 lg:p-0 lg:mr-4"
            onClick={closeMenu}
          >
            Skills
          </Link>
          <Link
            href="#experience"
            className="hover:text-gray-400 p-2 lg:p-0 lg:mr-4"
            onClick={closeMenu}
          >
            Experience
          </Link>
          <Link
            href="#education"
            className="hover:text-gray-400 p-2 lg:p-0 lg:mr-4"
            onClick={closeMenu}
          >
            Education
          </Link>
          <Link
            href="https://drive.google.com/file/d/1pHxZ0YdEESR-CnVxRrXeXcs6abYKhQgU/view?usp=sharing"
            className="hover:text-gray-400 p-2 lg:p-0 lg:mr-4"
            onClick={closeMenu}
          >
            Resume
          </Link>
        </div>
        {/* Hamburger Icon - visible on small screens */}
        <div
          className="lg:hidden flex items-center cursor-pointer"
          onClick={toggleMenu}
        >
          <Image
            src="/images/logos/Hamburger_icon.png"
            alt="Menu"
            width={25}
            height={25}
            color="white"
          />
        </div>
      </div>
    </div>
  );
}
