"use client";
import { IoIosSearch } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { IoBookmarkOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div className="hidden md:h-[105px] md:pl-9 md:pr-5 py-5">
      <div className="flex justify-between">
        <div className="text-[20px] tracking-[10px]">TANN TRIM</div>
        <div className="flex items-center gap-4">
          <div>
            <IoIosSearch className="text-2xl"/>
          </div>
          <div>
            <BsPerson className="text-2xl"/>
          </div>
          <div><IoBookmarkOutline className="text-xl"/></div>
          <div><HiOutlineShoppingBag className="text-2xl"/></div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex gap-10">
          <div>Bags</div>
          <div>Travel </div>
          <div>Accesories</div>
          <div>Gifting</div>
          <div>Jewelery</div>
        </div>
      </div>
    </div>
  );
}
