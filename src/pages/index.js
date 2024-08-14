import { Inter } from "next/font/google";
import History from "../components/history";
import ItemsToSell from "../components/itemsToSell";
import LastItems from "../components/lastItems";
import MainImage from "../components/mainImage";
import UseCarousel from "../components/useCarousel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
        <section className="w-full flex flex-col items-center mb-4 md:relative md:mb-40">
          <MainImage></MainImage>
          <History></History>
          <a className="flex items-center justify-center border-solid border-[1px] border-[#DB2217] w-[95%] h-[45px] text-[15px] text-[#DB2217] md:w-[400px] md:h-[60px] md:bg-white md:absolute md:bottom-[-190px] md:z-50" href="./ourHistory">CONOCE NUESTROS LOCALES</a>
        </section>
        <section className="relative w-[400px] h-[300px] md:w-full md:h-[550px]">
          <UseCarousel></UseCarousel>
        </section>
        <section className="w-full min-h-[400px] mt-8">
          <ItemsToSell verificating={false}></ItemsToSell>
        </section>
        <section>
            <LastItems></LastItems>
        </section>
    </>
  );
}
