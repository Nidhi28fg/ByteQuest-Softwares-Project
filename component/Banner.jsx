import Image from "next/image";
import bag from "@/public/bag1.png";
import bag2 from "@/public/bag2.png";
import bag3 from "@/public/bag3.png";
import bag4 from "@/public/bag4.png";
import bag5 from "@/public/bag5.png";
import bag6 from "@/public/bag6.png";
import bag7 from "@/public/bag7.png";
import bag8 from "@/public/bag8.png";
import bag9 from "@/public/bag9.png";

const images = [
  { image: bag, name: "All Bags" },
  { image: bag2, name: "Vanity Pouch" },
  { image: bag3, name: "Tote Bag" },
  { image: bag4, name: "Duffle Bag" },
  { image: bag5, name: "Laptop Sleeve" },
  { image: bag6, name: "Messenger Bags" },
  { image: bag7, name: "Slings Bags" },
  { image: bag8, name: "Handbags Bags" },
  { image: bag9, name: "Buck Bags" },
 
];

export default function Banner() {
  return (<div>
    <div className="overflow-auto whitespace-nowrap lg:pl-2 [&::-webkit-scrollbar]:hidden lg:py-8 mt-25">
      {images.map((img, key) => (
        <div key={key} className="inline-block p-6 ">
          {" "}
          <Image src={img.image} width={100} height={100} className="w-10 h-10 lg:w-25 lg:h-25 " alt={img.name} />
          <div className="text-center text-[8px] lg:text-[12px] pt-2">{img.name}</div>
        </div>
      ))}
    </div>
  
    </div>
  );
}
