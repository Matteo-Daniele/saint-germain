import classNames from "classnames";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import HistoryItems from "../components/historyItems";
import RightThingsBar from "../components/rightThingsBar";
import SearchBar from "../components/searchBar";
import ShoppingCarBar from "../components/shoppingCarBar";

export default function OurHistory(){
    const [searchOpen, setSearchOpen] = useState(false);
    const [rightBarOpen, setRightBarOpen] = useState(false);
    const [shoppingOpen, setShoppingOpen] = useState(false); 
    const mainStyle = classNames(
        "bg-[#e9eae4] overflow-x-hidden relative h-screen", {"overflow-hidden" : rightBarOpen || shoppingOpen}
    )
    return (
        <main className={mainStyle}>
            <header>
                <Header open={setSearchOpen} openRight={setRightBarOpen} openShopping={setShoppingOpen}></Header>
                <SearchBar isOpen={searchOpen} open={setSearchOpen}></SearchBar>
                <RightThingsBar isOpenRight={rightBarOpen} openRight={setRightBarOpen}></RightThingsBar>
                <ShoppingCarBar isOpenShopping={shoppingOpen} openShopping={setShoppingOpen}></ShoppingCarBar>
            </header>
            <section className="w-full flex flex-col items-center">
                <HistoryItems></HistoryItems>
            </section>
            <Footer></Footer>
        </main>
    )
}