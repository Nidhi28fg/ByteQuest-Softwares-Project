"use client";
import { PiDotOutlineFill } from "react-icons/pi";
import { PiExportBold } from "react-icons/pi";
import axios from "axios";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";
import Image from "next/image";
import { BsBookmark } from "react-icons/bs";
import { TbShoppingBagPlus } from "react-icons/tb";

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
      setLoading(false);
    };
    loadProduct();
  }, []);

  return (
    <div className="md:px-8 text-white">
      <div className="flex justify-between items-center px-2 md:px-0 text-[10px] md:text-[16px]">
        <div className="flex gap-1 ">
          Bags <PiDotOutlineFill /> Backpacks
        </div>
        <div className="flex gap-2 items-center">
          13 products <PiExportBold className="md:text-2xl text-[18px]" />
        </div>
      </div>
      {loading ? (
        <div className="h-screen text-center flex justify-center mt-15">
          {" "}
          <OrbitProgress color="#fdfdfd" size="medium" text="" textColor="" />
        </div>
      ) : (
            // grid center m 
        <div className="grid grid-cols-2 place-items-center md:grid-cols-4 md:gap-4">
          {products.map((item, key) => (
            <div
              className="rounded-2xl mt-12 w-[150px] h-[350px] md:w-[280.15px] md:h-[483.43px]"
              key={key}
            >
              <div className="relative h-[80%] bg-white flex items-center w-full rounded-t-2xl">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="md:w-full h-[180px] md:h-[300px] p-1 md:p-3 "
                />{" "}
                <BsBookmark className="text-black absolute top-4 right-4 md:text-4xl" />
              </div>
              <div className="h-[20%] px-2 py-3 flex flex-col">
                <div className="">
                  <p className="md:text-[20px] text-[12px] leading-tight md:h-12">
                    {item.title.length > 30
                      ? item.title.substring(0, 30) + "..."
                      : item.title}
                  </p>
            
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="font-bold text-[10px] md:text-[18px]">
                      ₹ {item.price}{" "}
                      <span className="md:text-[11px] text-[8px] font-light">
                        {item.rating.count}
                      </span>{" "}
                      <span className="text-green-400 md:text-[12px] text-[9px] font-semibold">
                        ({item.rating.rate})
                      </span>
                    </div>{" "}
                  </div>
                  <div>
                    <TbShoppingBagPlus className="md:text-4xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="h-50">

      </div>
    
    </div>
  );
}
