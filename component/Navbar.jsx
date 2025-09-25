"use client";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoReorderThree } from "react-icons/io5";
export default function Navbar() {
  return (
    <div className="md:h-[105px] md:pl-9 md:pr-5 py-5">
      <div className="flex justify-between items-center md:pb-6 pb-4 px-4 md:px-0">
        <div className="md:text-[20px] tracking-[10px]">TANN TRIM</div>
        <div className="hidden md:flex items-center gap-4">
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
        <div className="md:hidden"><IoReorderThree className="text-3xl"/></div>
      </div>
      <div className="flex justify-center">
        <div className="flex md:gap-10 gap-5 md:text-[16px] text-[10px]">
          <div className="md:text-14px text-9px">Bags</div>
          <div>Travel </div>
          <div>Accesories</div>
          <div>Gifting</div>
          <div>Jewelery</div>
        </div>
      </div>
    </div>
  );
}
