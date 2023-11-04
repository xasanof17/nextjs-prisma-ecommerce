"use client";
import { SearchBar } from "@/components";
import { Menu, Search, ShoppingCart, User, XIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

type Props = {};

const links = [
  {
    title: "Shop",
    href: "/",
  },
  {
    title: "Filters",
    href: "/filters",
  },
  {
    title: "My Products",
    href: "/products",
  },
];

const Navbar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <header className="sticky left-0 top-0 w-full">
      <nav className="container relative flex items-center justify-between py-3">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="text-2xl font-semibold">
            <Link href="/">Seine</Link>
          </div>
          <div className="max-md:hidden">
            <ul className="flex items-center space-x-7 lg:space-x-10">
              {links.map(({ title, href }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="inline-block w-full py-3 text-base font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => setShowProfile((prev) => !prev)}
            className="relative cursor-pointer"
          >
            <div className="relative h-[35px] w-[35px]">
              <Image
                src="/assets/user.jpg"
                className="rounded-full object-cover"
                alt="user"
                fill
              />
            </div>
            <div
              className={clsx(
                !showProfile && "hidden",
                "absolute -left-5 z-[2] rounded-lg bg-white p-2 shadow-lg",
              )}
            >
              <Link href="/signin" className="p-2">
                SignIn
              </Link>
            </div>
          </div>
          <Link href="/cart">
            <div className="rounded-full bg-gray-100 p-2">
              <ShoppingCart size={20} className="opacity-75" />
            </div>
          </Link>
          <span
            onClick={() => setShowNav((prev) => !prev)}
            className="rounded-full bg-gray-100 p-2 md:hidden"
          >
            {!showNav ? (
              <Menu
                className={clsx(
                  showNav ? "rotate-100" : "rotate-0",
                  "opacity-80 transition duration-150 ease-in",
                )}
              />
            ) : (
              <XIcon
                className={clsx(
                  showNav ? "rotate-100" : "rotate-0",
                  "opacity-80 transition duration-150 ease-in",
                )}
              />
            )}
          </span>
        </div>
      </nav>
      <div
        className={clsx(
          showNav ? "bg-white px-4 pb-4" : "invisible h-0 opacity-0",
          "md:hidden",
        )}
      >
        <ul className="flex flex-col text-base opacity-75">
          {links.map(({ title, href }, i) => (
            <li key={i}>
              <Link
                href={href}
                className="inline-block w-full py-3 text-base font-medium"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="my-3 flex items-center rounded-lg bg-gray-100 p-3 py-2">
          <input
            type="text"
            className="mr-2 w-full bg-transparent text-base font-medium caret-blue-500 outline-none placeholder:font-normal placeholder:text-gray-600"
            placeholder="Search..."
            autoComplete="false"
          />
          <button>
            <Search size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
