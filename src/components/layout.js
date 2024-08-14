import classNames from "classnames";
import { useState } from "react";
import RightThingsBar from "../components/rightThingsBar";
import SearchBar from "../components/searchBar";
import ShoppingCarBar from "../components/shoppingCarBar";
import Footer from "./footer";
import Header from "./header";
export default function Layout({children}){
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
            {children}
            <Footer></Footer>
        </main>
    )
}