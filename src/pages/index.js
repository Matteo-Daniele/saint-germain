import classNames from "classnames";
import { Inter } from "next/font/google";
import { useState } from "react";
import ButtonNavegation from "./components/buttonNavegation";
import Header from "./components/header";
import History from "./components/history";
import ImageSlider from "./components/imageSlider";
import MainImage from "./components/mainImage";
import RightThingsBar from "./components/rightThingsBar";
import SearchBar from "./components/searchBar";
import ShoppingCarBar from "./components/shoppingCarBar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [rightBarOpen, setRightBarOpen] = useState(false);
  const [shoppingOpen, setShoppingOpen] = useState(false); 
  const mainStyle = classNames(
    "bg-white overflow-x-hidden relative h-screen", {"overflow-hidden" : rightBarOpen || shoppingOpen}
  )

  return (
      <main className={mainStyle}>
          <Header open={setSearchOpen} openRight={setRightBarOpen} openShopping={setShoppingOpen}></Header>
          <SearchBar isOpen={searchOpen} open={setSearchOpen}></SearchBar>
          <RightThingsBar isOpenRight={rightBarOpen} openRight={setRightBarOpen}></RightThingsBar>
          <ShoppingCarBar isOpenShopping={shoppingOpen} openShopping={setShoppingOpen}></ShoppingCarBar>
        <section className="w-full flex flex-col items-center">
          <MainImage></MainImage>
            <img className="w-[90%] mt-24" src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/stgermain.png"></img>
          <History></History>
        </section>
        <section className="relative w-full h-[300px]">
          <ImageSlider srcImage="https://saintgermain.uy/cdn/shop/files/pocitos1_1400x.jpg?v=1668002764" nameShop="BOULANGERIE" locationShop="POCITOS"></ImageSlider>
          <ImageSlider srcImage="https://infonegocios.info/content/images/2022/07/21/129521/conversions/800x453-saint-germain-cafe-parisien-2-medium-size.jpg" nameShop="CAFE PARISIEN" locationShop="CARRASCO"></ImageSlider>
          <ImageSlider srcImage="https://saintgermain.uy/cdn/shop/files/divino-home_1400x.jpg?v=1667568207" nameShop="CAFE BISTROT" locationShop="DIVINO CENTRAL"></ImageSlider>
          <ButtonNavegation></ButtonNavegation>
        </section>
    </main>
  );
}
