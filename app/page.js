import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import Product from "@/component/Product";

export default function Home() {
  return (
    <div className="bg-black flex flex-col text-[#E5DFD9] font-[100] tracking-[2px] items-center justify-center leading-[100%] overflow-hidden">
      
      <div className="xl:w-[1280px] w-full">
        <div><Navbar/></div>
        <Banner/>
        <Product/>
      </div>
    </div>
  );
}
