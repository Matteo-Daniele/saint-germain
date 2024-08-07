import Footer from "@/components/footer";
import Header from "@/components/header";
import RightThingsBar from "@/components/rightThingsBar";
import SearchBar from "@/components/searchBar";
import ShoppingCarBar from "@/components/shoppingCarBar";
import classNames from "classnames";
import { useRouter } from 'next/router';
import { useState } from "react";
export default function CollectionTienda(){
    const [searchOpen, setSearchOpen] = useState(false);
    const [rightBarOpen, setRightBarOpen] = useState(false);
    const [shoppingOpen, setShoppingOpen] = useState(false); 
    const router = useRouter();
    const { mainImage } = router.query; // Get the 'url' parameter from the query
    const { typeProduct } = router.query;
    const { products } = router.query;
    const mainStyle = classNames(
        "bg-[#e9eae4] overflow-x-hidden relative h-screen", {"overflow-hidden" : rightBarOpen || shoppingOpen}
    )
    const textStyle = [
        "absolute bottom-0 left-0 text-[28px] font-solid ml-3 mb-3 tracking-[0.3em]"
    ]
    return(
        <main className={mainStyle}>
            <header>
                <Header open={setSearchOpen} openRight={setRightBarOpen} openShopping={setShoppingOpen}></Header>
                <SearchBar isOpen={searchOpen} open={setSearchOpen}></SearchBar>
                <RightThingsBar isOpenRight={rightBarOpen} openRight={setRightBarOpen}></RightThingsBar>
                <ShoppingCarBar isOpenShopping={shoppingOpen} openShopping={setShoppingOpen}></ShoppingCarBar>
            </header>
            <div className="relative">
                <div className="absolute w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-30 tracking"></div>
                <img className="h-[250px] w-full object-cover" src={mainImage}></img>
                <h3 className={textStyle}>{typeProduct}</h3>
            </div>
            <section>
                <div className="flex flex-col p-6 gap-5">
                    <div className="flex flex-row justify-between w-full h-[50px]">
                        <a href="tienda" className="text-[#344a80] tracking-widest h-6 hover:bg-white">← VOLVER</a>
                        <label htmlFor="sortBy" className="hidden" >Mas vendidos</label>
                        <select className="text-[#344a80] bg-transparent border-solid border-[#344a80] border-[1px] w-[150px] h-[40px]" name="sortBy" id="sortBy" data-value="more-sold">
                            <option className="w-20 h-20" value="more-sold">MÁS VENDIDOS</option>
                            <option value="alfabetic-order">ALFABETICO A-Z</option>
                            <option value="most-price-to-less-price">PRECIO MENOR A MAYOR</option>
                        </select>
                    </div>
                    <div className="text-[16px] text-[#344a80] tracking-wider">
                        <p className="text-center">IMPORTANTE: LOS PEDIDOS SE PUEDEN REALIZAR CON UN MINIMO DE 48 HORAS DE ANTICIPACION.</p> 
                    </div>
                </div>
                
               {/* <p className="text-white">aaaaasdasdasd</p>
                {products.map((product, i) =>(
                    <div>
                        {product.name} 
                    </div>
                ))} */}
            </section>
            <Footer></Footer>
        </main>
    )
}