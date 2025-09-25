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
    <div className="lg:px-8 text-white">
      <div className="flex justify-between items-center px-2 lg:px-0 text-[10px] lg:text-[16px]">
        <div className="flex gap-1 ">
          Bags <PiDotOutlineFill /> Backpacks
        </div>
        <div className="flex gap-2 items-center">
          13 products <PiExportBold className="lg:text-2xl text-[18px]" />
        </div>
      </div>
      {loading ? (
        <div className="h-screen text-center flex justify-center mt-15">
          {" "}
          <OrbitProgress color="#fdfdfd" size="medium" text="" textColor="" />
        </div>
      ) : (
            // grid center m 
        <div className="grid grid-cols-2 md:grid-cols-3 place-items-center xl:grid-cols-4 lg:gap-4">
          {products.map((item, key) => (
            <div
              className="rounded-2xl mt-12 w-[150px] h-[350px] lg:w-[280.15px] lg:h-[483.43px]"
              key={key}
            >
              <div className="relative h-[80%] bg-white flex items-center w-full rounded-t-2xl">
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="lg:w-full h-[180px] lg:h-[300px] p-1 lg:p-3 "
                />{" "}
                <BsBookmark className="text-black absolute top-4 right-4 lg:text-4xl" />
              </div>
              <div className="h-[20%] px-2 py-3 flex flex-col">
                <div className="">
                  <p className="lg:text-[20px] text-[12px] leading-tight lg:h-12">
                    {item.title.length > 30
                      ? item.title.substring(0, 30) + "..."
                      : item.title}
                  </p>
            
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <div className="font-bold text-[10px] lg:text-[18px]">
                      ₹ {item.price}{" "}
                      <span className="lg:text-[11px] text-[8px] font-light">
                        {item.rating.count}
                      </span>{" "}
                      <span className="text-green-400 lg:text-[12px] text-[9px] font-semibold">
                        ({item.rating.rate})
                      </span>
                    </div>{" "}
                  </div>
                  <div>
                    <TbShoppingBagPlus className="lg:text-4xl" />
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
