import classNames from "classnames";
import { Inter } from "next/font/google";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import History from "../components/history";
import ItemsToSell from "../components/itemsToSell";
import LastItems from "../components/lastItems";
import MainImage from "../components/mainImage";
import RightThingsBar from "../components/rightThingsBar";
import SearchBar from "../components/searchBar";
import ShoppingCarBar from "../components/shoppingCarBar";
import UseCarousel from "../components/useCarousel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [rightBarOpen, setRightBarOpen] = useState(false);
  const [shoppingOpen, setShoppingOpen] = useState(false); 
  const mainStyle = classNames(
    "bg-[#e9eae4] overflow-x-hidden relative h-screen", {"overflow-hidden" : rightBarOpen || shoppingOpen}
  )
  return (
      <main className={mainStyle}>
          <Header open={setSearchOpen} openRight={setRightBarOpen} openShopping={setShoppingOpen}></Header>
          <SearchBar isOpen={searchOpen} open={setSearchOpen}></SearchBar>
          <RightThingsBar isOpenRight={rightBarOpen} openRight={setRightBarOpen}></RightThingsBar>
          <ShoppingCarBar isOpenShopping={shoppingOpen} openShopping={setShoppingOpen}></ShoppingCarBar>
        <section className="w-full flex flex-col items-center mb-4">
          <MainImage></MainImage>
          <History></History>
          <a className="flex items-center justify-center border-solid border-[1px] border-[#DB2217] w-[95%] h-[45px] text-[15px] text-[#DB2217]" href="./ourHistory">CONOCE NUESTROS LOCALES</a>
        </section>
        <section className="relative max-w-[400px] h-[300px]">
          <UseCarousel></UseCarousel>
        </section>
        <section className="w-full min-h-[400px] mt-8">
          <ItemsToSell verificating={false}></ItemsToSell>
        </section>
        <section>
            <LastItems></LastItems>
        </section>
        <Footer></Footer>
    </main>
  );
}
