import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";
import Product from "@/component/Product";

export default function Home() {
  return (
    <div className="bg-black text-[#E5DFD9] font-[100] tracking-[2px] flex items-center justify-center leading-[100%] overflow-hidden">
      <div className="xl:w-[1280px] w-full">
        <Navbar />
        <Banner/>
        <Product/>
      </div>
    </div>
  );
}
