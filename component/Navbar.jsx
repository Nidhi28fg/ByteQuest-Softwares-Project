"use client";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <div className="xl:h-[105px] xl:pl-9 xl:pr-5 py-5 fixed top-0 inset-x-0 z-100 bg-black">
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
        <div className="xl:hidden" onClick={() => setIsOpen(!isOpen)}><IoReorderThree className="text-3xl"/></div>
      </div>

   

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
