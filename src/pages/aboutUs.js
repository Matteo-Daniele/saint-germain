import classNames from "classnames";
import { Aboreto, Inter } from "next/font/google";
import { useState } from "react";
import ClientsReview from "../components/clientsReview";
import Footer from "../components/footer";
import Header from "../components/header";
import History from "../components/history";
import RightThingsBar from "../components/rightThingsBar";
import SearchBar from "../components/searchBar";
import ShoppingCarBar from "../components/shoppingCarBar";
import UseCarousel from "../components/useCarousel";
const inter = Inter({ subsets: ["latin"] });
const aboreto = Aboreto({subsets: ["latin"], weight: ["400"] });

export default function AboutAs(){
    const [searchOpen, setSearchOpen] = useState(false);
    const [rightBarOpen, setRightBarOpen] = useState(false);
    const [shoppingOpen, setShoppingOpen] = useState(false); 
    const mainStyle = classNames(
        "bg-[#e9eae4] overflow-x-hidden relative h-screen", {"overflow-hidden" : rightBarOpen || shoppingOpen}, aboreto.className
    )
    const logoImagesStyle = classNames(
        "h-full w-[35%]"
    )
    return (
        <main className={mainStyle}>
            <header>
                <Header open={setSearchOpen} openRight={setRightBarOpen} openShopping={setShoppingOpen}></Header>
                <SearchBar isOpen={searchOpen} open={setSearchOpen}></SearchBar>
                <RightThingsBar isOpenRight={rightBarOpen} openRight={setRightBarOpen}></RightThingsBar>
                <ShoppingCarBar isOpenShopping={shoppingOpen} openShopping={setShoppingOpen}></ShoppingCarBar>
            </header>
            <section className="flex flex-col items-center w-full">
                <video src="/videoSaintGermain.mp4" loop autoPlay muted/>
                <History></History>
                <div className="w-full relative h-[40px] mt-10 mb-10">
                    <img className="absolute inset-0 w-full h-full object-cover" src="https://saintgermain.uy/cdn/shop/t/20/assets/guarda.svg"></img>
                </div>
                <section className="min-h-400px flex flex-col items-center mt-5 gap-5">
                    <div className="w-[90%] flex flex-col gap-6">
                        <h2 className="text-[#BFAF82] text-[32px] font-semibold tracking-widest leading-tight">HACER EL PAN COMO EN FRANCIA: EN ESO CREEMOS</h2>
                        <p className="text-[16px] text-[#344a80] tracking-widest">NUESTROS PRODUCTOS SON ELABORADOS CON <span className="font-semibold">HARINAS GRAND MOULINS DE PARIS,</span> HECHAS DE SELECCIONADOS TRIGOS RANCESES Y SIN ADITIVOS, ACORDE A LA ESTRICTA DENOMINACION: <span  className="font-semibold">PAIN DE TRADITION FRANÇAISE</span></p>                    
                    </div>
                    <div className="w-full h-[70%] flex flex-col items-center">
                        <div className="flex flex-row w-[90%] mb-5 gap-10 h-[120px] items-start">
                            <img className={logoImagesStyle} src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/St-Germain-logo_220x@2x.png"></img>
                            <img className={logoImagesStyle} src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/grand-moulins.png"></img>
                        </div>
                        <img className="w-[90%] h-[450px]" src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/about-us-2.jpg"></img>
                    </div>
                    <a className="flex items-center justify-center border-solid border-[1px] border-[#DB2217] w-[95%] h-[45px] text-[15px] text-[#DB2217] mb-5" href="./ourHistory">CONOCE NUESTROS LOCALES</a>
                </section>
                <section className="relative max-w-[400px] h-[300px]">
                   <UseCarousel></UseCarousel>
                </section>
                <ClientsReview></ClientsReview>
            </section>
            <Footer></Footer>
        </main>
    )
}