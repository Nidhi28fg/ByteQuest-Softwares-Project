"use client";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoBookmarkOutline, IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";
import { PiClosedCaptioning } from "react-icons/pi";

export default function Navbar() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <div className="xl:h-[105px] xl:pl-9 xl:pr-5 py-5 fixed z-10000 bg-black xl:w-[1280px] w-full">
      <div className="flex justify-between items-center xl:pb-6 pb-4 px-4 xl:px-0">
        <div className="xl:text-[20px] tracking-[10px]">TANN TRIM</div>
        <div className="hidden xl:flex items-center gap-4">
          <div>
            <IoIosSearch className="text-2xl" />
          </div>
          <div>
            <BsPerson className="text-2xl" />
          </div>
          <div>
            <IoBookmarkOutline className="text-xl" />
          </div>
          <div>
            <HiOutlineShoppingBag className="text-2xl" />
          </div>
        </div>
        <div
          className="xl:hidden"
          onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
        >
          <IoReorderThree className="text-3xl" />
        </div>
      </div>

      {isOpenMobileNav && (
        <div className="bg-gray-900 w-[40%] h-screen text-white text-center z-50 absolute top-0 right-0 p-10">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
          >
            <IoClose className="text-2xl" />
          </div>
          <div className="flex flex-col items-center gap-8 mt-10">
            <div>
              <IoIosSearch className="text-2xl" />
            </div>
            <div>
              <BsPerson className="text-2xl" />
            </div>
            <div>
              <IoBookmarkOutline className="text-xl" />
            </div>
            <div>
              <HiOutlineShoppingBag className="text-2xl" />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-center">
        <div className="flex xl:gap-10 gap-5 xl:text-[16px] text-[10px]">
          <div className="xl:text-14px text-9px">Bags</div>
          <div>Travel </div>
          <div>Accesories</div>
          <div>Gifting</div>
          <div>Jewelery</div>
        </div>
      </div>
    </div>
  );
}
