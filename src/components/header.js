import Image from "next/image";
import searchIcon from '../images/redSearchIcon.png';
import settingsIcon from '../images/settingsIcon.png';
import shoppingCart from '../images/shoppingCart.png';
export default function Header({open, openRight, openShopping}) {
    return (
        <header className="h-[180px] w-full bg-[#e9eae4x] flex flex-row items-center justify-center gap-7">
            <a className="w-3/6 h-3/6" href="../../">
                <img className="size-full" src="https://saintgermain.uy/cdn/shop/t/20/assets/logo-stg.svg"></img>
            </a>
            <div className="flex flex-row gap-3 mr-3">
                <div className="w-[25px] cursor-pointer" onClick={
                    () => {
                        open(true);
                    }
                }>
                    <Image src={searchIcon} alt="search icon"></Image>
                </div>
                <div className="w-[25px] cursor-pointer relative" onClick={
                    () => {
                        openRight(true);
                    }
                }>
                    <Image className="absolute w-[30px] h-[30px] top-[-2.5px] object-cover" src={settingsIcon} alt="settings icon"></Image>
                </div>
                <div onClick={
                    () => {
                        openShopping(true);
                    }
                } className="w-[25px] cursor-pointer">
                    <Image  src={shoppingCart} alt="shopping cart icon"></Image>
                </div>
            </div>
        </header>
    )
}