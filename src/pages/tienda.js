import classNames from "classnames";
import { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import ItemsToSell from "../components/itemsToSell";
import RightThingsBar from "../components/rightThingsBar";
import SearchBar from "../components/searchBar";
import ShoppingCarBar from "../components/shoppingCarBar";

export default function Tienda(){
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
            <section className="mb-6">
                <ItemsToSell verificating={true}></ItemsToSell>
            </section>
            <Footer></Footer>
        </main>
    )
}