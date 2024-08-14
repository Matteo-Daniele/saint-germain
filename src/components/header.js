import classNames from "classnames";
import Image from "next/image";
import logInIcon from '../images/loginIcon.png';
import searchIcon from '../images/redSearchIcon.png';
import settingsIcon from '../images/settingsIcon.png';
import shoppingCart from '../images/shoppingCart.png';
export default function Header({open, openRight, openShopping}) {
    const buttonStyle = classNames (
        "cursor-pointer flex items-center justify-center w-1/6 h-full text-[#DB2217] border-[#DB2217] border-solid border-[1px] md:hover:border-[#BFAF82] md:hover:text-[#BFAF82]"
    )
    const firstButtonStyle = classNames (
        "flex items-center justify-center w-2/6 h-full text-[#DB2217] border-[#DB2217] border-solid border-[1px] md:hover:border-[#BFAF82] md:hover:text-[#BFAF82]"
    )
    return (
        <header className="h-[160px] w-full bg-[#e9eae4x] flex flex-row items-center justify-center gap-7 md:justify-center">
            <a className="w-3/6 h-4/6 md:w-1/6" href="../../">
                <img className="size-full" src="https://saintgermain.uy/cdn/shop/t/20/assets/logo-stg.svg"></img>
            </a>
            <div className="hidden w-[700px] h-[50px] md:flex md:flex-row md:gap-1">
                <a href="/aboutUs" className={firstButtonStyle}>SOBRE NOSOTROS</a>
                <a href="/ourHistory" className={buttonStyle}>LOCALES</a>
                <a href="/tienda" className={buttonStyle}>TIENDA</a>
                <a className={buttonStyle}>AYUDA</a>
                <a className={buttonStyle}>CONTACTO</a>
            </div>
            <div className="flex flex-row gap-8 mr-3">
                <div className="w-[25px] cursor-pointer hidden md:flex">
                        <Image src={logInIcon} alt="search icon"></Image>
                </div>
                <div className="w-[25px] cursor-pointer" onClick={
                    () => {
                        open(true);
                    }
                }>
                    <Image src={searchIcon} alt="search icon"></Image>
                </div>
                <div className="w-[25px] cursor-pointer relative md:hidden" onClick={
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