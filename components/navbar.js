/** @format */
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import clsx from "clsx";

import { FaFacebook } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


import LogoWhite from "@/public/images/whitelogo.png"
import LogoOrange from '@/public/images/orangelogo.png';

export default function Navbar() {

  const [isSideMenuOpen, setMenu] = useState(false);

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoSrc = scrolling ? LogoOrange : LogoWhite;

  const navlinks = [
    {
      name: "Our Work",
      link: "#"
    },
    {
      name: "Our Story",
      link: "#"
    },
    {
      name: "Our Community",
      link: "#"
    },
    {
      name: "Insights",
      link: "#"
    },
    {
      name: "Contact Us",
      link: "#"
    }
  ];

  return (
    <main>
      <nav className=" flex justify-between pt-2 items-center ">
        <div className="flex items-center gap-8">
          <section className="flex items-center gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <Image src={logoSrc} className='h-20 w-85 pl-14 pr-28 pb-2' />
          </section>
          {navlinks.map((d, i) => (
            <Link
              key={i}
              className="hidden lg:block text-sm text-white gap-2"
              href={d.link}
            >
              {d.name}
            </Link>
          ))}
        </div>

        {/* mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />

            {navlinks.map((d, i) => (
              <Link key={i} className="font-bold" href={d.link}>
                {d.name}
              </Link>
            ))}
          </section>
        </div>

        {/* 3rd section */}
        <section className="flex items-center gap-1 text-white mr-32">
          {/* Social icon */}
          <FaFacebook/>
          <BsTwitterX/>
          <FaTiktok/>
          <FaInstagram/>          
        </section>
      </nav>
      {/* <hr className=" " /> */}
    </main>
  );
}
