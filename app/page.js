import Banner from "@/component/Banner";
import Navbar from "@/component/Navbar";

export default function Home() {
  return (
    <div className="bg-black text-white tracking-[2px] flex items-center justify-center leading-[100%] overflow-x-hidden">
      <div className="md:w-[1280px] w-full">
        <Navbar className="hidden md:block fixed top-0 left-0 right-0"/>
        <Banner/>
      </div>
    </div>
  );
}
